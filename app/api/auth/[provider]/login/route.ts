import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  context: { params: { provider: string } }
) {
  try {
    const { provider } = context.params;

    const apiRes = await fetch(`http://192.168.1.2:2001/${provider}/login`, {
      method: 'GET',
    });

    const data = await apiRes.json();
    const cookieStore = await cookies();
    cookieStore.set('provider', provider, { httpOnly: true });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal Server Error', error },
      { status: 500 }
    );
  }
}
