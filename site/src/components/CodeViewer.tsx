'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const Editor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

export default function CodeViewer({ initialCode, language, filePath }: { initialCode:string; language:string; filePath:string }) {
  const [code, setCode] = useState(initialCode);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    alert('Code copied to clipboard');
  };

  const githubLink = `https://github.com/ritikesh11052000/DSA-Programming-Challenges-Python-Java/blob/main/${filePath.replace('../','')}`;

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex gap-2">
          <button onClick={copy} className="px-3 py-1 bg-gray-200 rounded">Copy</button>
          <a className="px-3 py-1 bg-gray-200 rounded" href={githubLink} target="_blank" rel="noreferrer">Edit on GitHub</a>
        </div>
      </div>

      <div className="border rounded overflow-hidden">
        <Editor
          height="400px"
          defaultLanguage={language === 'python' ? 'python' : (language === 'java' ? 'java' : 'plaintext')}
          value={code}
          onChange={(val) => setCode(val || '')}
          options={{ minimap: { enabled: false }, fontSize: 14 }}
        />
      </div>
    </div>
  );
}
