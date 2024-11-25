import { exec } from 'child_process';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { text, key, mode } = await request.json();

    // Validate inputs
    if (!text || !key || !mode) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate key is 4 digits
    if (!/^\d{4}$/.test(key)) {
      return NextResponse.json(
        { error: 'Key must be 4 digits' },
        { status: 400 }
      );
    }

    return new Promise((resolve) => {
      // Path to your Python script
      const pythonScript = `python scripts/cipher.py "${text}" "${key}" "${mode}"`;

      exec(pythonScript, (error, stdout, stderr) => {
        if (error) {
          console.error('Error:', error);
          resolve(NextResponse.json({ error: error.message }, { status: 500 }));
          return;
        }
        if (stderr) {
          console.error('Stderr:', stderr);
          resolve(NextResponse.json({ error: stderr }, { status: 500 }));
          return;
        }
        resolve(NextResponse.json({ result: stdout.trim() }));
      });
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 