import PhaseCard from '../components/PhaseCard'

const phases = [
  {
    title: "Phase 1 – Core Programming Fundamentals",
    description: "Master the basics of programming with variables, data types, operators, and control structures. Learn input/output operations and basic problem-solving techniques.",
    folderPath: "Phase 1 – Core Programming Fundamentals"
  },
  {
    title: "Phase 2 – Intermediate Logic + Arrays & Strings",
    description: "Dive deeper into logical thinking with arrays, strings, and intermediate algorithms. Practice pattern recognition and data manipulation techniques.",
    folderPath: "Phase 2 – Intermediate Logic + Arrays & Strings"
  },
  {
    title: "Phase 3 – Algorithms & Sorting",
    description: "Explore fundamental algorithms including searching, sorting, and optimization techniques. Understand time and space complexity analysis.",
    folderPath: "Phase 3 – Algorithms & Sorting"
  },
  {
    title: "Phase 4 – Data Structures",
    description: "Master essential data structures including linked lists, trees, stacks, queues, and matrices. Learn implementation and practical applications.",
    folderPath: "Phase 4 – Data Structures (Linked List, Trees, Matrix)"
  },
  {
    title: "Phase 5 – Object-Oriented Programming",
    description: "Focus on Java's object-oriented programming paradigm with classes, inheritance, polymorphism, and encapsulation. Build robust, maintainable code.",
    folderPath: "Phase 5 – Object-Oriented Programming (Java Focus)"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-200 mb-4">
            DSA Programming Challenges – Python & Java
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
            A structured, multi-phase learning roadmap covering fundamentals, algorithms, data structures, and object-oriented programming.
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            This comprehensive repository contains five progressive phases of Data Structures and Algorithms learning.
            Each phase includes clean code examples, challenging problems, and working solutions in both Python and Java.
            Browse through folders, explore code interactively, and enhance your programming skills with practical implementations.
          </p>
        </div>
      </div>

      {/* Phase Cards Grid */}
      <div className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {phases.map((phase, index) => (
            <PhaseCard
              key={index}
              title={phase.title}
              description={phase.description}
              folderPath={phase.folderPath}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-300 dark:border-[rgba(255,255,255,0.06)] py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400 tracking-wide">
            Built with Next.js, Tailwind, Prism.js, and GitHub API.
          </p>
        </div>
      </footer>
    </div>
  )
}
