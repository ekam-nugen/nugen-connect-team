import { baseUrl } from '@/lib/axios';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  console.log('test');

  try {
    const body = await req.json();

    const apiRes = await fetch(`${baseUrl}/email/login`, {
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

    const token = data.token;

    const cookieStore = await cookies();
    cookieStore.set('token', token, { httpOnly: true });

    return NextResponse.json({ token });
  } catch (error) {
    console.error('Login API error:', error);
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
}
