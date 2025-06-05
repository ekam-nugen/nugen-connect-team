import { baseUrl } from '@/lib/axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const apiRes = await fetch(`${baseUrl}/auth/forgot-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await apiRes.json();

    if (!apiRes.ok) {
      return NextResponse.json(data, { status: apiRes.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal Server Error', error },
      { status: 500 }
    );
  }
}
