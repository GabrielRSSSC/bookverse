import {
  BookOpen,
  Heart,
  Search,
  Upload,
  User,
} from "lucide-react"

export function Header() {
  return (
    <header className="w-full border-b border-zinc-800 bg-zinc-950 px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold text-white">
          <BookOpen className="h-6 w-6" strokeWidth={2.5} />
          <span>BookVerse</span>
        </div>

        {/* Search */}
        <div className="relative hidden w-full max-w-xl md:flex">
          <Search
            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400"
            strokeWidth={2.5}
          />

          <input
            type="text"
            placeholder="Encontre sua próxima história..."
            className="w-full rounded-full border border-zinc-800 bg-zinc-900 py-3 pl-12 pr-4 text-sm text-white outline-none transition focus:border-violet-500"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3">
          <button
            title="Upload"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-900 text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
          >
            <Upload className="h-5 w-5" />
          </button>

          <button
            title="Favoritos"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-900 text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
          >
            <Heart className="h-5 w-5" />
          </button>

          <button
            title="Perfil"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-900 text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
          >
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}