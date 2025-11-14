'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Home, Layers, FileText } from 'lucide-react'

export default function BottomNavBar() {
  const pathname = usePathname()

  const isActive = (path) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-full px-4 py-3 shadow-lg border border-white/20 dark:border-white/10">
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 hover:scale-110 ${
            isActive('/')
              ? 'bg-blue-500 text-white'
              : 'bg-white/20 dark:bg-black/20 text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-black/30'
          }`}
        >
          <Home className="w-5 h-5" />
        </Link>
        <Link
          href="/phase"
          className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 hover:scale-110 ${
            isActive('/phase')
              ? 'bg-blue-500 text-white'
              : 'bg-white/20 dark:bg-black/20 text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-black/30'
          }`}
        >
          <Layers className="w-5 h-5" />
        </Link>
        <Link
          href="/file"
          className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 hover:scale-110 ${
            isActive('/file')
              ? 'bg-blue-500 text-white'
              : 'bg-white/20 dark:bg-black/20 text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-black/30'
          }`}
        >
          <FileText className="w-5 h-5" />
        </Link>
      </div>
    </nav>
  )
}
