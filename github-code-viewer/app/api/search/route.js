import { NextResponse } from 'next/server'

// In-memory cache for search index
let searchIndex = null
let lastBuildTime = 0
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

async function buildSearchIndex() {
  if (searchIndex && Date.now() - lastBuildTime < CACHE_DURATION) {
    return searchIndex
  }

  try {
    const phases = [
      {
        name: "Phase 1 – Core Programming Fundamentals",
        path: "/phase/Phase 1 – Core Programming Fundamentals",
        type: "phase"
      },
      {
        name: "Phase 2 – Intermediate Logic + Arrays & Strings",
        path: "/phase/Phase 2 – Intermediate Logic + Arrays & Strings",
        type: "phase"
      },
      {
        name: "Phase 3 – Algorithms & Sorting",
        path: "/phase/Phase 3 – Algorithms & Sorting",
        type: "phase"
      },
      {
        name: "Phase 4 – Data Structures",
        path: "/phase/Phase 4 – Data Structures (Linked List, Trees, Matrix)",
        type: "phase"
      },
      {
        name: "Phase 5 – Object-Oriented Programming",
        path: "/phase/Phase 5 – Object-Oriented Programming (Java Focus)",
        type: "phase"
      }
    ]

    const folders = []
    const files = []

    // Fetch folders and files for each phase
    for (const phase of phases) {
      try {
        const phaseName = phase.name
        const encodedPath = encodeURIComponent(phaseName)
        const res = await fetch(`https://api.github.com/repos/ritikesh11052000/DSA-Programming-Challenges-Python-Java/contents/${encodedPath}/`, {
          next: { revalidate: 300 } // Cache for 5 minutes
        })

        if (res.ok) {
          const data = await res.json()
          const phaseFolders = data.filter(item => item.type === 'dir')

          for (const folder of phaseFolders) {
            folders.push({
              name: folder.name.replace(/-/g, ' '),
              path: `/phase/${phaseName}/${folder.name}`,
              type: "folder",
              phase: phaseName
            })

            // Fetch files in this folder
            try {
              const folderRes = await fetch(`https://api.github.com/repos/ritikesh11052000/DSA-Programming-Challenges-Python-Java/contents/${encodedPath}/${encodeURIComponent(folder.name)}/`, {
                next: { revalidate: 300 }
              })

              if (folderRes.ok) {
                const folderData = await folderRes.json()
                const folderFiles = folderData.filter(item =>
                  item.type === 'file' &&
                  (item.name.endsWith('.py') ||
                   item.name.endsWith('.java') ||
                   item.name.endsWith('.ipynb') ||
                   item.name.endsWith('.js') ||
                   item.name.endsWith('.jsx') ||
                   item.name.endsWith('.ts') ||
                   item.name.endsWith('.tsx') ||
                   item.name.endsWith('.md') ||
                   item.name.endsWith('.json'))
                )

                for (const file of folderFiles) {
                  files.push({
                    name: file.name,
                    path: `/file/${phaseName}/${folder.name}/${file.name}`,
                    type: "file",
                    phase: phaseName,
                    folder: folder.name
                  })
                }
              }
            } catch (error) {
              console.error(`Error fetching files for ${folder.name}:`, error)
            }
          }
        }
      } catch (error) {
        console.error(`Error fetching data for ${phase.name}:`, error)
      }
    }

    searchIndex = {
      phases,
      folders,
      files,
      all: [...phases, ...folders, ...files]
    }

    lastBuildTime = Date.now()
    return searchIndex

  } catch (error) {
    console.error('Error building search index:', error)
    return { phases: [], folders: [], files: [], all: [] }
  }
}

function fuzzySearch(query, items) {
  const searchTerm = query.toLowerCase().trim()

  return items
    .map(item => {
      const name = item.name.toLowerCase()
      const path = item.path?.toLowerCase() || ''

      // Exact match gets highest score
      if (name === searchTerm) return { ...item, score: 100 }

      // Starts with search term
      if (name.startsWith(searchTerm)) return { ...item, score: 90 }

      // Contains search term
      if (name.includes(searchTerm)) return { ...item, score: 80 }

      // Path contains search term
      if (path.includes(searchTerm)) return { ...item, score: 70 }

      // Fuzzy match - check if all characters of search term appear in order
      let searchIndex = 0
      for (let i = 0; i < name.length; i++) {
        if (name[i] === searchTerm[searchIndex]) {
          searchIndex++
          if (searchIndex === searchTerm.length) {
            return { ...item, score: 60 }
          }
        }
      }

      return null
    })
    .filter(item => item !== null)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10) // Limit to top 10 results
}

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')

  if (!query || query.length < 2) {
    return NextResponse.json([])
  }

  try {
    const index = await buildSearchIndex()
    const results = fuzzySearch(query, index.all)

    return NextResponse.json(results)
  } catch (error) {
    console.error('Search API error:', error)
    return NextResponse.json({ error: 'Search failed' }, { status: 500 })
  }
}
