'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import CodeRunner from '../../../components/CodeRunner';
const CodeViewer = dynamic(() => import('../../../components/CodeViewer'), { ssr: false });

export default function ChallengePage({ params }: { params: { phaseId: string; challengeId: string } }) {
  const [challenge, setChallenge] = useState<any>(null);
  const [source, setSource] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch('/data/challenges.json');
        const json = await res.json();
        const phase = json.phases.find((p: any) => String(p.id) === params.phaseId);
        if (!phase) throw new Error('Phase not found');
        const ch = phase.challenges.find((c: any) => c.id === params.challengeId);
        if (!ch) throw new Error('Challenge not found');
        setChallenge(ch);

        // Fetch the code file
        const codeRes = await fetch(ch.path);
        if (!codeRes.ok) throw new Error('Failed to load code file');
        const code = await codeRes.text();
        setSource(code);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [params.phaseId, params.challengeId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!challenge) return <p>Challenge not found</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{challenge.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{challenge.language}</p>

      <CodeViewer initialCode={source} language={challenge.language} filePath={challenge.path} />
      <CodeRunner initialCode={source} language={challenge.language} />
    </div>
  );
}
