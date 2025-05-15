import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifyToken } from '@/lib/auth';

// Intercepted Route: Redirect authenticated users trying to access /login
export default async function InterceptedAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  if (token && verifyToken(token)) redirect('/dashboard');

  return null; // Fallback to (auth)/login
}
