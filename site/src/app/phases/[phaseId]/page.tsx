import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function PhasePage({ params }: { params: { phaseId: string } }) {
  const dataPath = path.join(process.cwd(), 'app', 'data', 'challenges.json');
  const raw = fs.existsSync(dataPath) ? fs.readFileSync(dataPath, 'utf8') : '{"phases":[] }';
  const json = JSON.parse(raw);
  const phase = json.phases.find((p: any) => String(p.id) === params.phaseId);
  if (!phase) return <p>Phase not found</p>;

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">{phase.name}</h1>
      <div className="grid gap-3 md:grid-cols-2">
        {phase.challenges.map((c: any) => (
          <Link key={c.id} href={`/phases/${phase.id}/${c.id}`} className="p-4 border rounded hover:shadow cursor-pointer block">
            <h3 className="font-medium">{c.title}</h3>
            <p className="text-sm text-gray-500">{c.language}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
