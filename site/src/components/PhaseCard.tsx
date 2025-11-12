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
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={`/phases/${phase.id}`} className="block bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 hover:border-gray-600 transition-all duration-300 group">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-200">{phase.name}</h2>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            phase.status === 'completed'
              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
              : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
          }`}>
            {phase.status === 'completed' ? '✅ Completed' : '🔜 In Progress'}
          </span>
        </div>
        <p className="text-gray-300 mb-6 text-lg">{phase.challenges.length} challenges</p>
        <div className="flex flex-wrap gap-2">
          {phase.challenges.slice(0, 4).map(challenge => (
            <span key={challenge.id} className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full text-sm font-medium">
              {challenge.language}
            </span>
          ))}
          {phase.challenges.length > 4 && (
            <span className="px-3 py-1 bg-gray-600/50 text-gray-300 border border-gray-500/30 rounded-full text-sm font-medium">
              +{phase.challenges.length - 4} more
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
