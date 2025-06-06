import { baseUrl } from '@/lib/axios';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const url = new URL(req.url);
    const tokenUrl = url.searchParams.get('token');

    const apiRes = await fetch(
      `${baseUrl}/auth/reset-password?token=${tokenUrl}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );

    const data = await apiRes.json();
    const token = data?.token;

    if (!apiRes.ok) {
      return NextResponse.json(data, { status: apiRes.status });
    }

    if (!token) {
      return NextResponse.json(
        { message: 'Token missing in API response' },
        { status: 400 }
      );
    }
    const cookieStore = await cookies();
    cookieStore.set('token', token, { httpOnly: true });
    return NextResponse.json({ token });
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal Server Error', error },
      { status: 500 }
    );
  }
}
