import { baseUrl } from '@/lib/axios';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const apiRes = await fetch(
      `${baseUrl}/core/create/org/json
 `,
      {
        method: 'GET',
      }
    );
    const data = await apiRes.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: 'Failed to fetch onboarding data',
      error: (error as Error).message,
    });
  }
}
