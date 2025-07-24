import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();
    if (!message) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
    }
    // Email sending removed. Just return success.
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to process message.' }, { status: 500 });
  }
} 