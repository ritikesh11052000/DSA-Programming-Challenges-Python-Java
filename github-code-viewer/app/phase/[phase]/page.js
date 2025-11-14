import { notFound } from 'next/navigation'
import FolderCard from '../../../components/FolderCard'

async function getPhaseFolders(phaseName) {
  try {
    const encodedPath = encodeURIComponent(phaseName)
    const res = await fetch(`https://api.github.com/repos/ritikesh11052000/DSA-Programming-Challenges-Python-Java/contents/${encodedPath}/`)
    if (!res.ok) {
      return null
    }
    const data = await res.json()
    // Filter only directories (folders)
    return data.filter(item => item.type === 'dir')
  } catch (error) {
    return null
  }
}

export default async function PhasePage({ params }) {
  const phase = decodeURIComponent(params.phase)
  const folders = await getPhaseFolders(phase)

  if (!folders) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-200 mb-2">{phase.replace(/-/g, ' ')}</h1>
          <p className="text-gray-600 dark:text-gray-400">Explore the folders in this phase</p>
        </div>

        {/* Folders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {folders.map(folder => (
            <FolderCard
              key={folder.name}
              title={folder.name.replace(/-/g, ' ')}
              phaseName={phase}
              folderName={folder.name}
            />
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <a
            href="/"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
