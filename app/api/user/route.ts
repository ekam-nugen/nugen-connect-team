import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId') || '1';
  return NextResponse.json({
    email: `user${userId}@example.com`,
    name: `User ${userId}`,
  });
}
