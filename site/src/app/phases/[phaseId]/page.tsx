'use client';
import { useState, useEffect } from 'react';
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

export default function PhasePage({ params }: { params: { phaseId: string } }) {
  const [phase, setPhase] = useState<Phase | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/challenges.json')
      .then(res => res.json())
      .then(data => {
        const foundPhase = data.phases.find((p: any) => String(p.id) === params.phaseId);
        setPhase(foundPhase || null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [params.phaseId]);

  if (loading) return <p>Loading...</p>;
  if (!phase) return <p>Phase not found</p>;

  return (
    <section className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold mb-2 text-gray-900">{phase.name}</h1>
          <p className="text-gray-600">{phase.challenges.length} challenges available</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {phase.challenges.map((c: any) => (
            <Link
              key={c.id}
              href={`/phases/${phase.id}/${c.id}`}
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow bg-white block"
            >
              <h3 className="font-semibold text-xl mb-3">{c.title}</h3>
              <div className="flex items-center justify-between">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                  {c.language}
                </span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
