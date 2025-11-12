'use client';
import { useState } from 'react';
import axios from 'axios';

export default function CodeRunner({ initialCode, language }: { initialCode:string; language:string }) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [running, setRunning] = useState(false);

  const run = async () => {
    setRunning(true);
    setOutput('Running...');
    try {
      const res = await axios.post('/api/execute', {
        language: language === 'python' ? 'python' : (language === 'java' ? 'java' : language),
        source: code
      }, { headers: { 'Content-Type': 'application/json' }});
      setOutput(res.data.output || res.data.stdout || res.data.stderr || 'No output');
    } catch (err: any) {
      setOutput('Execution error: ' + (err?.response?.data?.error || err.message));
    } finally {
      setRunning(false);
    }
  };

  return (
    <div className="mt-4">
      <div className="flex gap-2">
        <button className="px-3 py-1 bg-green-600 text-white rounded" onClick={run} disabled={running}>
          {running ? 'Running…' : 'Run'}
        </button>
      </div>

      <pre className="mt-3 bg-black text-white p-3 rounded h-40 overflow-auto">
        {output}
      </pre>
    </div>
  );
}
