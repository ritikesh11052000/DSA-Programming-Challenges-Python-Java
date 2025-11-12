'use client';
import { useState, useEffect } from 'react';
import Fuse from 'fuse.js';

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

interface SearchBarProps {
  phases: Phase[];
  onSearch: (results: { phase: Phase; challenge: Challenge }[]) => void;
}

export default function SearchBar({ phases, onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query.trim()) {
      onSearch([]);
      return;
    }

    const allChallenges = phases.flatMap(phase =>
      phase.challenges.map(challenge => ({ phase, challenge }))
    );

    const fuse = new Fuse(allChallenges, {
      keys: ['challenge.title', 'challenge.tags', 'phase.name'],
      threshold: 0.3,
    });

    const results = fuse.search(query).map(result => result.item);
    onSearch(results);
  }, [query, phases, onSearch]);

  return (
    <div className="mb-12 max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search challenges, phases, or tags..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-4 pl-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all duration-300"
        />
        <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  );
}
