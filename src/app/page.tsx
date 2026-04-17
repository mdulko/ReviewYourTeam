'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import TeamListCard from '@/components/TeamListCard'

interface Nickname {
  id: string
  nickname: string
  reason?: string
}

interface List {
  id: string
  title: string
  color: 'green' | 'yellow' | 'red'
  nicknames: Nickname[]
}

export default function Home() {
  const [lists, setLists] = useState<List[]>([
    {
      id: '1',
      title: 'Very Good Teammates',
      color: 'green',
      nicknames: [],
    },
    {
      id: '2',
      title: 'Medium Teammates',
      color: 'yellow',
      nicknames: [],
    },
    {
      id: '3',
      title: 'Trash Teammates',
      color: 'red',
      nicknames: [],
    },
  ])

  const handleEditTitle = (listId: string, newTitle: string) => {
    setLists(
      lists.map((list) =>
        list.id === listId ? { ...list, title: newTitle } : list
      )
    )
  }

  const handleAddNickname = (
    listId: string,
    nickname: string,
    reason: string
  ) => {
    setLists(
      lists.map((list) =>
        list.id === listId
          ? {
            ...list,
            nicknames: [
              ...list.nicknames,
              {
                id: Date.now().toString(),
                nickname,
                reason: reason || undefined,
              },
            ],
          }
          : list
      )
    )
  }

  const handleRemoveNickname = (listId: string, nicknameId: string) => {
    setLists(
      lists.map((list) =>
        list.id === listId
          ? {
            ...list,
            nicknames: list.nicknames.filter((n) => n.id !== nicknameId),
          }
          : list
      )
    )
  }

  return (
    <>
      <Header />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#e8e8e8] mb-2">
            Your Lists
          </h2>
          <p className="text-[#a8a8a8]">
            Organize and review your teammates across different categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lists.map((list) => (
            <TeamListCard
              key={list.id}
              title={list.title}
              listId={list.id}
              color={list.color}
              nicknames={list.nicknames}
              isEditable={true}
              onEditTitle={(newTitle) => handleEditTitle(list.id, newTitle)}
              onAddNickname={(nickname, reason) =>
                handleAddNickname(list.id, nickname, reason)
              }
              onRemoveNickname={(nicknameId) =>
                handleRemoveNickname(list.id, nicknameId)
              }
            />
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-[#242424] border border-[#3a3a3a] rounded-lg p-8">
          <h3 className="text-xl font-bold text-[#00d4ff] mb-4">
            Getting Started
          </h3>
          <ul className="text-[#a8a8a8] space-y-2">
            <li>
              ✓ Edit list titles by clicking on them - perfect for different
              categories
            </li>
            <li>
              ✓ Add player nicknames with optional reasons for rating them
            </li>
            <li>✓ Drag nicknames between lists to reorganize teammates</li>
            <li>
              ✓ Share your lists globally when you&apos;re ready - coming soon!
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}

