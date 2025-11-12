import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: NextRequest) {
  try {
    const { language, source, version } = await request.json();

    // Sanitize input
    if (!language || !source) {
      return NextResponse.json({ error: 'Missing language or source' }, { status: 400 });
    }

    // Rate limiting (simple in-memory, for production use Redis or similar)
    const clientIP = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    // For now, skip rate limiting in dev

    // Call Piston API
    const pistonResponse = await axios.post('https://emkc.org/api/v2/piston/execute', {
      language,
      version: version || 'latest',
      files: [{ content: source }]
    }, {
      timeout: 5000, // 5 second timeout
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const { run, compile } = pistonResponse.data;

    return NextResponse.json({
      output: run?.output || compile?.output || '',
      stderr: run?.stderr || compile?.stderr || '',
      stdout: run?.stdout || '',
      code: run?.code || compile?.code || 0,
      signal: run?.signal || null,
      language,
      version: pistonResponse.data.version
    });

  } catch (error: any) {
    console.error('Execution error:', error);
    return NextResponse.json({
      error: 'Execution failed',
      details: error.response?.data || error.message
    }, { status: 500 });
  }
}
