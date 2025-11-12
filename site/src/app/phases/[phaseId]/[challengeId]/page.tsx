import fs from 'fs';
import path from 'path';
import dynamic from 'next/dynamic';
import CodeRunner from '../../../components/CodeRunner';
const CodeViewer = dynamic(() => import('../../../components/CodeViewer'), { ssr: false });

export default function ChallengePage({ params }: { params: { phaseId: string; challengeId: string } }) {
  const dataPath = path.join(process.cwd(), 'app', 'data', 'challenges.json');
  const raw = fs.existsSync(dataPath) ? fs.readFileSync(dataPath, 'utf8') : '{"phases":[] }';
  const json = JSON.parse(raw);
  const phase = json.phases.find((p:any) => String(p.id) === params.phaseId);
  if (!phase) return <p>Phase not found</p>;
  const challenge = phase.challenges.find((c:any) => c.id === params.challengeId);
  if (!challenge) return <p>Challenge not found</p>;

  const codeFilePath = path.resolve(process.cwd(), challenge.path);
  let source = '';
  try {
    source = fs.readFileSync(codeFilePath, 'utf8');
  } catch (e) {
    source = `// Unable to load file at ${codeFilePath}\n// Check challenge.path in challenges.json`;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{challenge.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{challenge.language}</p>

      <CodeViewer initialCode={source} language={challenge.language} filePath={challenge.path} />
      <CodeRunner initialCode={source} language={challenge.language} />
    </div>
  );
}
