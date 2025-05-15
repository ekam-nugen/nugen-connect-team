import { NextResponse } from 'next/server';
import { sign } from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const { email, password } = await request.json();
  if (email === 'test@example.com' && password === 'password') {
    const token = sign({ email, name: 'Test User' }, 'secret', {
      expiresIn: '1h',
    });
    const cookieStore = await cookies();
    cookieStore.set('token', token, { httpOnly: true });
    return NextResponse.json({ token });
  }
  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}
