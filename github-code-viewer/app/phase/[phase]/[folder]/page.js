import { notFound } from 'next/navigation'

async function getFolderFiles(phaseName, folderName) {
  try {
    const fullPath = `${phaseName}/${folderName}`
    const encodedPath = encodeURIComponent(fullPath)
    const res = await fetch(`https://api.github.com/repos/ritikesh11052000/DSA-Programming-Challenges-Python-Java/contents/${encodedPath}/`)
    if (!res.ok) {
      return null
    }
    const data = await res.json()
    // Filter only files (not directories) and only .py, .java, .ipynb files
    return data.filter(item =>
      item.type === 'file' &&
      (item.name.endsWith('.py') || item.name.endsWith('.java') || item.name.endsWith('.ipynb'))
    )
  } catch (error) {
    return null
  }
}

export default async function FolderPage({ params }) {
  const phase = decodeURIComponent(params.phase)
  const folder = decodeURIComponent(params.folder)
  const files = await getFolderFiles(phase, folder)

  if (!files) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-200 mb-2">{folder.replace(/-/g, ' ')}</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Available implementations</p>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Phase: {phase.replace(/-/g, ' ')}
          </div>
        </div>

        {/* Files List */}
        <div className="space-y-4">
          {files.map(file => (
            <div key={file.name} className="bg-gray-100 dark:bg-[#0a0a0a] border border-gray-300 dark:border-[rgba(255,255,255,0.06)] rounded-lg p-4 hover:bg-gray-200 dark:hover:bg-[rgba(255,255,255,0.05)] transition-colors duration-200 cursor-pointer">
              <a
                href={`/file/${encodeURIComponent(`${phase}/${folder}/${file.name}`)}`}
                className="text-gray-900 dark:text-gray-200 hover:text-gray-700 dark:hover:text-white transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <span className="text-gray-600 dark:text-gray-400 text-sm">📄</span>
                  <span className="font-medium">{file.name}</span>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <a
            href={`/phase/${encodeURIComponent(phase)}`}
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"
          >
            ← Back to {phase.replace(/-/g, ' ')}
          </a>
        </div>
      </div>
    </div>
  )
}
