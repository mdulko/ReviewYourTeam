'use client'

export default function Header() {
  return (
    <header className="sticky top-0 w-full bg-[#242424] border-b border-[#00d4ff] shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#00d4ff] to-[#ff3333] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">RYT</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#00d4ff]">Review Your Team</h1>
            <p className="text-xs text-[#a8a8a8]">Rate your teammates • Apex Legends</p>
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <button className="px-4 py-2 text-sm font-medium text-[#e8e8e8] hover:text-[#00d4ff] transition-colors">
            My Lists
          </button>
          <button className="px-4 py-2 text-sm font-medium text-[#e8e8e8] hover:text-[#00d4ff] transition-colors">
            Shared Lists
          </button>
          <button className="px-6 py-2 bg-gradient-to-r from-[#00d4ff] to-[#00f5ff] text-[#1a1a1a] font-bold rounded-lg hover:shadow-lg hover:shadow-[#00d4ff]/50 transition-all">
            + New List
          </button>
        </nav>
      </div>
    </header>
  )
}
