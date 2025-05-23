import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  context: { params: { provider: string } }
) {
  try {
    const { provider } = context.params;

    const url = new URL(req.url);
    const searchParams = url.searchParams.toString();

    const apiUrl = `http://192.168.1.14:2001/${provider}/callback?${searchParams}`;
    const apiRes = await fetch(apiUrl, {
      method: 'GET',
    });

    if (!apiRes.ok) {
      return NextResponse.json(
        { message: `Error from internal API: ${apiRes.status}` },
        { status: apiRes.status }
      );
    }

    const responseData = await apiRes.json();
    const token = responseData?.token;

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
      { message: 'Internal Server Error', error: (error as Error).message },
      { status: 500 }
    );
  }
}
