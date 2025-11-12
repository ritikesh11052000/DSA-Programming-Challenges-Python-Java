'use client';
import { motion } from 'framer-motion';

interface Phase {
  id: number;
  name: string;
  status: string;
  challenges: any[];
}

interface ProgressTrackerProps {
  phases: Phase[];
}

export default function ProgressTracker({ phases }: ProgressTrackerProps) {
  const completedPhases = phases.filter(p => p.status === 'completed').length;
  const totalPhases = phases.length;
  const progress = (completedPhases / totalPhases) * 100;

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Progress Tracker</h2>
      <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-4">
        <motion.div
          className="bg-green-500 h-4 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1 }}
        />
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {completedPhases} of {totalPhases} phases completed
      </p>
      <div className="grid gap-2 mt-4">
        {phases.map(phase => (
          <div key={phase.id} className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full ${phase.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'}`} />
            <span className="text-sm">{phase.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
