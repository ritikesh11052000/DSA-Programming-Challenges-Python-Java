'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import CodeView from '../../../components/CodeView'

export default function FilePage({ params }) {
  const { path } = params
  const [content, setContent] = useState(null)
  const [error, setError] = useState(null)
  const pathname = usePathname()
  const formattedPath = formatPath(pathname)

  function stripANSI(str) {
    // Remove ANSI escape sequences (like \x1b[32m for green text)
    let cleaned = str.replace(/\u001b\[[0-9;]*m/g, '');
    // Remove zero-width spaces and other invisible Unicode artifacts
    cleaned = cleaned.replace(/\u200b/g, '');
    return cleaned;
  }

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const fullPath = path.join('/')
        // Check if this is a directory by trying to fetch from GitHub API
        const apiRes = await fetch(`https://api.github.com/repos/ritikesh11052000/DSA-Programming-Challenges-Python-Java/contents/${fullPath}`)
        if (apiRes.ok) {
          const data = await apiRes.json()
          if (Array.isArray(data)) {
            // It's a directory, show a message
            setContent(`# ${fullPath}\n\nThis is a directory containing ${data.length} items.\n\nPlease select a file from the sidebar to view its contents.`)
            setError(null)
            return
          }
        }

        // Try to fetch as a file
        const res = await fetch(`https://raw.githubusercontent.com/ritikesh11052000/DSA-Programming-Challenges-Python-Java/main/${fullPath}`)
        if (!res.ok) {
          setError('File not found')
          return
        }
        const fileContent = await res.text()
        const cleanedContent = stripANSI(fileContent)
        setContent(cleanedContent)
        setError(null)
      } catch (err) {
        setError('Failed to load file')
      }
    }
    fetchContent()
  }, [path])

  if (!content) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black p-4 md:p-6">
      <div className="text-gray-600 dark:text-gray-400 text-sm mb-4 tracking-wide">
        {formattedPath}
      </div>
      <CodeView
        content={content}
        language={getLanguageFromPath(path)}
        path={path.join('/')}
      />
    </div>
  )
}

function getLanguageFromPath(path) {
  const fileName = path[path.length - 1]
  if (fileName.endsWith('.py')) return 'python'
  if (fileName.endsWith('.java')) return 'java'
  if (fileName.endsWith('.js')) return 'javascript'
  if (fileName.endsWith('.jsx')) return 'jsx'
  if (fileName.endsWith('.ts')) return 'typescript'
  if (fileName.endsWith('.tsx')) return 'tsx'
  if (fileName.endsWith('.json')) return 'json'
  if (fileName.endsWith('.md')) return 'markdown'
  return 'text'
}

function formatPath(pathname) {
  // Extract the part after '/file/'
  const filePath = pathname.replace('/file/', '')
  // Split by '/'
  const segments = filePath.split('/')
  // Decode each segment
  const decodedSegments = segments.map(segment => decodeURIComponent(segment))
  // Join with ' / '
  return decodedSegments.join(' / ')
}
