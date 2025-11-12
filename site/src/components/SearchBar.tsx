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
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search challenges..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
