import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// Intercepted Route: Redirect authenticated users trying to access /login
export default async function InterceptedAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  if (token) redirect('/dashboard');

  return null; // Fallback to (auth)/login
}
