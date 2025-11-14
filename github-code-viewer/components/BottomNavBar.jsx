'use client'

import { usePathname, useRouter } from 'next/navigation'

export default function BottomNavBar() {
  const pathname = usePathname()
  const router = useRouter()

  // Utility function to extract phase and folder from pathname
  const getNavigationPaths = () => {
    const segments = pathname.split('/').filter(Boolean)

    if (segments.length === 0) return null // Home page

    const phase = segments[1] ? decodeURIComponent(segments[1]) : null
    const folder = segments[2] ? decodeURIComponent(segments[2]) : null

    return { phase, folder }
  }

  const paths = getNavigationPaths()

  // Don't show bottom nav on home page
  if (!paths || !paths.phase) return null

  const handleGoToPhase = () => {
    router.push(`/phase/${encodeURIComponent(paths.phase)}`)
  }

  const handleGoToFolder = () => {
    if (paths.folder) {
      router.push(`/phase/${encodeURIComponent(paths.phase)}/${encodeURIComponent(paths.folder)}`)
    }
  }

  const handleGoHome = () => {
    router.push('/')
  }

  const handleGoBack = () => {
    router.back()
  }

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-200 dark:bg-[#111] rounded-full px-4 py-3 shadow-lg border border-gray-300 dark:border-[rgba(255,255,255,0.1)]">
      <div className="flex items-center gap-3">
        {/* Back Button */}
        <button
          onClick={handleGoBack}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-[#1a1a1a] dark:hover:bg-[#2a2a2a] text-gray-900 dark:text-gray-200 transition-colors duration-200"
          title="Go Back"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Go to Phase Button */}
        <button
          onClick={handleGoToPhase}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-[#1a1a1a] dark:hover:bg-[#2a2a2a] text-gray-900 dark:text-gray-200 transition-colors duration-200"
          title="Go to Phase"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </button>

        {/* Go to Folder Button - Only show if we have a folder */}
        {paths.folder && (
          <button
            onClick={handleGoToFolder}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-[#1a1a1a] dark:hover:bg-[#2a2a2a] text-gray-900 dark:text-gray-200 transition-colors duration-200"
            title="Go to Folder"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
            </svg>
          </button>
        )}

        {/* Home Button */}
        <button
          onClick={handleGoHome}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-[#1a1a1a] dark:hover:bg-[#2a2a2a] text-gray-900 dark:text-gray-200 transition-colors duration-200"
          title="Go Home"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
