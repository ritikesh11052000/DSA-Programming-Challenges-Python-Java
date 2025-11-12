'use client';
import { useState, useEffect } from 'react';
import PhaseCard from '../components/PhaseCard';
import SearchBar from '../components/SearchBar';

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            DSA Programming Challenges
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Master Data Structures and Algorithms with hands-on coding challenges across multiple programming languages
          </p>
        </div>

        <SearchBar phases={phases} onSearch={handleSearch} />

        {searchResults.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Search Results</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {searchResults.map(({ phase, challenge }) => (
                <div key={`${phase.id}-${challenge.id}`} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300">
                  <h3 className="font-semibold text-lg mb-2 text-white">{challenge.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{phase.name} • {challenge.language}</p>
                  <a
                    href={`/phases/${phase.id}/${challenge.id}`}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    View Challenge
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPhases.map(phase => (
            <PhaseCard key={phase.id} phase={phase} />
          ))}
        </div>
      </div>
    </div>
  );
}
