'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Challenge {
  id: string;
  title: string;
  path: string;
  language: string;
  tags: string[];
}

interface Phase {
  id: number;
  name: string;
  status: string;
  challenges: Challenge[];
}

interface PhaseCardProps {
  phase: Phase;
}

export default function PhaseCard({ phase }: PhaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/phases/${phase.id}`} className="block border rounded-lg p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-semibold">{phase.name}</h2>
          <span className={`px-2 py-1 rounded text-sm ${phase.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'}`}>
            {phase.status === 'completed' ? '✅ Completed' : '🔜 In Progress'}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{phase.challenges.length} challenges</p>
        <div className="flex flex-wrap gap-1">
          {phase.challenges.slice(0, 3).map(challenge => (
            <span key={challenge.id} className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded text-xs">
              {challenge.language}
            </span>
          ))}
          {phase.challenges.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded text-xs">
              +{phase.challenges.length - 3} more
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
