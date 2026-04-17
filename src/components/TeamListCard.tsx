'use client'

import { useState } from 'react'

interface Nickname {
  id: string
  nickname: string
  reason?: string
}

interface TeamListCardProps {
  title: string
  listId: string
  color: 'green' | 'yellow' | 'red'
  nicknames: Nickname[]
  isEditable?: boolean
  onEditTitle?: (newTitle: string) => void
  onAddNickname?: (nickname: string, reason: string) => void
  onRemoveNickname?: (nicknameId: string) => void
  onMoveNickname?: (nicknameId: string, toListId: string) => void
}

interface Colors {
  green: {
    border: string
    bg: string
    text: string
    button: string
  }
  yellow: {
    border: string
    bg: string
    text: string
    button: string
  }
  red: {
    border: string
    bg: string
    text: string
    button: string
  }
}

const colorMap: Colors = {
  green: {
    border: 'border-[#00ff41]',
    bg: 'bg-[#00ff41]/10',
    text: 'text-[#00ff41]',
    button: 'hover:bg-[#00ff41]/20',
  },
  yellow: {
    border: 'border-[#ffaa00]',
    bg: 'bg-[#ffaa00]/10',
    text: 'text-[#ffaa00]',
    button: 'hover:bg-[#ffaa00]/20',
  },
  red: {
    border: 'border-[#ff3333]',
    bg: 'bg-[#ff3333]/10',
    text: 'text-[#ff3333]',
    button: 'hover:bg-[#ff3333]/20',
  },
}

export default function TeamListCard({
  title,
  color,
  nicknames,
  isEditable = false,
  onEditTitle,
  onAddNickname,
  onRemoveNickname,
}: TeamListCardProps) {
  const [isEditingTitle, setIsEditingTitle] = useState(false)
  const [editedTitle, setEditedTitle] = useState(title)
  const [newNickname, setNewNickname] = useState('')
  const [newReason, setNewReason] = useState('')
  const [isAddingNickname, setIsAddingNickname] = useState(false)

  const colors = colorMap[color]

  const handleSaveTitle = () => {
    if (editedTitle.trim() && onEditTitle) {
      onEditTitle(editedTitle.trim())
    }
    setIsEditingTitle(false)
  }

  const handleAddNickname = () => {
    if (newNickname.trim() && onAddNickname) {
      onAddNickname(newNickname.trim(), newReason.trim())
      setNewNickname('')
      setNewReason('')
      setIsAddingNickname(false)
    }
  }

  return (
    <div className={`border-2 ${colors.border} ${colors.bg} rounded-lg p-6 flex flex-col h-full`}>
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        {isEditingTitle ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            onBlur={handleSaveTitle}
            onKeyDown={(e) => e.key === 'Enter' && handleSaveTitle()}
            autoFocus
            className="bg-[#1a1a1a] border border-[#00d4ff] rounded px-3 py-2 text-[#e8e8e8] flex-1 mr-2"
          />
        ) : (
          <h3
            className={`text-lg font-bold ${colors.text} cursor-pointer hover:opacity-70 transition`}
            onClick={() => isEditable && setIsEditingTitle(true)}
            title={isEditable ? 'Click to edit' : ''}
          >
            {title}
          </h3>
        )}
      </div>

      {/* Nicknames List */}
      <div className="flex-1 mb-4 space-y-2 overflow-y-auto max-h-96">
        {nicknames.length === 0 ? (
          <p className="text-[#a8a8a8] italic text-sm">No nicknames yet</p>
        ) : (
          nicknames.map((nick) => (
            <div
              key={nick.id}
              className={`bg-[#242424] rounded p-3 border border-[#3a3a3a] ${colors.button} transition`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <p className="font-semibold text-[#e8e8e8]">{nick.nickname}</p>
                  {nick.reason && (
                    <p className="text-xs text-[#a8a8a8] mt-1">{nick.reason}</p>
                  )}
                </div>
                {isEditable && (
                  <button
                    onClick={() => onRemoveNickname?.(nick.id)}
                    className="text-[#ff3333] hover:text-[#ff5555] text-sm font-bold transition"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Add Nickname Form */}
      {isEditable && (
        <div className="border-t border-[#3a3a3a] pt-4">
          {!isAddingNickname ? (
            <button
              onClick={() => setIsAddingNickname(true)}
              className={`w-full py-2 ${colors.text} border border-[#3a3a3a] rounded hover:bg-[#242424] transition font-medium`}
            >
              + Add Nickname
            </button>
          ) : (
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Player nickname"
                value={newNickname}
                onChange={(e) => setNewNickname(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-[#3a3a3a] rounded px-3 py-2 text-[#e8e8e8] text-sm"
              />
              <textarea
                placeholder="Reason (optional)"
                value={newReason}
                onChange={(e) => setNewReason(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-[#3a3a3a] rounded px-3 py-2 text-[#e8e8e8] text-sm resize-none"
                rows={2}
              />
              <div className="flex gap-2">
                <button
                  onClick={handleAddNickname}
                  className={`flex-1 py-2 bg-[#00ff41] text-[#1a1a1a] rounded font-bold hover:bg-[#00ff70] transition`}
                >
                  Add
                </button>
                <button
                  onClick={() => {
                    setIsAddingNickname(false)
                    setNewNickname('')
                    setNewReason('')
                  }}
                  className="flex-1 py-2 bg-[#3a3a3a] text-[#e8e8e8] rounded hover:bg-[#4a4a4a] transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
