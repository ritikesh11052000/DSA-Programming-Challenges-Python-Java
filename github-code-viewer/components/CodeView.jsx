'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Prism from 'prismjs'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-markdown'

function stripANSI(str) {
  return str
    .replace(/\u001b\[[0-9;]*m/g, '')
    .replace(/\u200b/g, '');
}

export default function CodeView({ content, language = 'text', path = '' }) {
  const { theme } = useTheme()
  const [copied, setCopied] = useState(false)
  const cleanedContent = stripANSI(content)

  useEffect(() => {
    // Dynamically import the correct Prism theme based on the current theme
    if (theme === 'dark') {
      import('../styles/prism-dark.css')
    } else {
      import('../styles/prism-light.css')
    }
    Prism.highlightAll()
  }, [cleanedContent, language, theme])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(content)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const breadcrumb = path ? path.split('/').filter(Boolean) : []

  return (
    <div className={`h-full rounded-xl p-4 md:p-6 lg:p-8 overflow-x-auto transition-all duration-300 ${
      theme === 'dark'
        ? 'bg-[#0a0a0a] text-gray-200 border border-gray-700 shadow-md'
        : 'bg-[#f5f5f5] text-black border border-gray-300 shadow-sm'
    }`}>


      {/* Copy Code Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-200 hover-scale transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          {copied ? 'Copied!' : 'Copy Code'}
        </button>
      </div>

      {/* Code Content */}
      <div className="fade-in">
        <pre className={`language-${language} ${
          theme === 'dark'
            ? '!bg-black !text-gray-100'
            : '!bg-white !text-gray-900'
        } !p-0 !m-0`}>
          <code className={`language-${language}`}>
            {cleanedContent}
          </code>
        </pre>
      </div>
    </div>
  )
}
