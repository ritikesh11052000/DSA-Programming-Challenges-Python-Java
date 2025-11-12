'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(document.documentElement.classList.contains('dark'));
  };

  return (
    <nav className="w-full border-b py-3 px-4 bg-white dark:bg-[#0b0f14]">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="font-bold">DSA Challenges</Link>
        <div className="flex items-center gap-3">
          <Link href="/phases/1" className="text-sm">Phases</Link>
          <button onClick={toggle} className="px-2 py-1 border rounded">
            {isDark ? 'Light' : 'Dark'}
          </button>
          <a href="https://github.com/ritikesh11052000/DSA-Programming-Challenges-Python-Java" target="_blank" rel="noreferrer" className="text-sm">GitHub</a>
        </div>
      </div>
    </nav>
  );
}
