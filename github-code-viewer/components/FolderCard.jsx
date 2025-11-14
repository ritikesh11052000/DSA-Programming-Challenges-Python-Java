'use client'

import { useRouter } from 'next/navigation'

export default function FolderCard({ title, phaseName, folderName }) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/phase/${encodeURIComponent(phaseName)}/${encodeURIComponent(folderName)}`)
  }

  return (
    <div
      onClick={handleClick}
      className="bg-gray-100 dark:bg-[#0a0a0a] border border-gray-300 dark:border-[rgba(255,255,255,0.06)] rounded-xl p-6 cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:bg-gray-200 dark:hover:bg-[rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(0,0,0,0.4)] shadow-[0_0_20px_rgba(0,0,0,0.3)]"
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Click to view files in this folder</p>
    </div>
  )
}
