'use client'

import { useRouter } from 'next/navigation'
import { Folder, FileText, Layers, Loader2 } from 'lucide-react'

export default function SearchResults({ results, isLoading, onResultClick }) {
  const router = useRouter()

  const handleResultClick = (result) => {
    router.push(result.path)
    onResultClick()
  }

  const getIcon = (type) => {
    switch (type) {
      case 'phase':
        return <Layers className="w-4 h-4 text-blue-500" />
      case 'folder':
        return <Folder className="w-4 h-4 text-yellow-500" />
      case 'file':
        return <FileText className="w-4 h-4 text-green-500" />
      default:
        return <FileText className="w-4 h-4 text-gray-500" />
    }
  }

  const getTypeLabel = (type) => {
    switch (type) {
      case 'phase':
        return 'Phase'
      case 'folder':
        return 'Folder'
      case 'file':
        return 'File'
      default:
        return 'Item'
    }
  }

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-black/95 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
      {isLoading && (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="w-5 h-5 animate-spin text-gray-400 dark:text-gray-500" />
          <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">Searching...</span>
        </div>
      )}

      {!isLoading && results.length === 0 && (
        <div className="py-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">No results found</p>
        </div>
      )}

      {!isLoading && results.length > 0 && (
        <div className="py-2">
          {results.map((result, index) => (
            <button
              key={index}
              onClick={() => handleResultClick(result)}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-150 flex items-center gap-3 group"
            >
              {getIcon(result.type)}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-200 truncate">
                    {result.name}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">
                    {getTypeLabel(result.type)}
                  </span>
                </div>
                {result.path && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">
                    {result.path.replace('/phase/', '').replace('/file/', '')}
                  </p>
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
