'use client';
import { useState, useEffect } from 'react';
import PhaseCard from '../components/PhaseCard';
import SearchBar from '../components/SearchBar';
import ProgressTracker from '../components/ProgressTracker';

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

export default function Home() {
  const [phases, setPhases] = useState<Phase[]>([]);
  const [filteredPhases, setFilteredPhases] = useState<Phase[]>([]);
  const [searchResults, setSearchResults] = useState<{ phase: Phase; challenge: Challenge }[]>([]);

  useEffect(() => {
    fetch('/data/challenges.json')
      .then(res => res.json())
      .then(data => {
        setPhases(data.phases);
        setFilteredPhases(data.phases);
      });
  }, []);

  const handleSearch = (results: { phase: Phase; challenge: Challenge }[]) => {
    setSearchResults(results);
    if (results.length > 0) {
      const phaseIds = [...new Set(results.map(r => r.phase.id))];
      setFilteredPhases(phases.filter(p => phaseIds.includes(p.id)));
    } else {
      setFilteredPhases(phases);
    }
  };

  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">DSA Programming Challenges</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">Interactive viewer and runner for Python & Java challenges.</p>

      <ProgressTracker phases={phases} />
      <SearchBar phases={phases} onSearch={handleSearch} />

      {searchResults.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Search Results</h2>
          <div className="space-y-2">
            {searchResults.map(({ phase, challenge }) => (
              <div key={`${phase.id}-${challenge.id}`} className="border rounded p-4 bg-gray-50 dark:bg-gray-800">
                <h3 className="font-medium">{challenge.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{phase.name} • {challenge.language}</p>
                <a href={`/phases/${phase.id}/${challenge.id}`} className="text-blue-600 hover:underline">View Challenge</a>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPhases.map(phase => (
          <PhaseCard key={phase.id} phase={phase} />
        ))}
      </div>
    </section>
  );
}
