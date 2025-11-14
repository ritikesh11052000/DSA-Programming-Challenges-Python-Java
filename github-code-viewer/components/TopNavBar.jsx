'use client'

import { useRouter } from 'next/navigation'
import SearchBar from './SearchBar'

export default function TopNavBar() {
  const router = useRouter()

  return (
    <nav className="h-[56px] bg-gray-100 dark:bg-[#0a0a0a] border-b border-gray-300 dark:border-[rgba(255,255,255,0.06)] flex items-center justify-between px-4 md:px-6">
      {/* Left side - Back button */}
      <button
        onClick={() => router.back()}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-[#1a1a1a] dark:hover:bg-[#2a2a2a] text-gray-900 dark:text-gray-200 transition-colors duration-200"
        title="Go Back"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Center - Search Bar */}
      <SearchBar />

      {/* Right side - Home button */}
      <button
        onClick={() => router.push('/')}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-[#1a1a1a] dark:hover:bg-[#2a2a2a] text-gray-900 dark:text-gray-200 transition-colors duration-200"
        title="Go Home"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </button>
    </nav>
  )
}
