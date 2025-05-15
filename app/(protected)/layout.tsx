import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifyToken } from '@/lib/auth';

export default async function ProtectedLayout({
  children,
  dashboard,
  profile,
}: {
  children: React.ReactNode;
  dashboard: React.ReactNode;
  profile: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  if (!token || !verifyToken(token)) redirect('/login');

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white p-4">
        <h1 className="text-lg font-semibold">Secure App</h1>
      </nav>
      <div className="flex">
        <div className="w-1/2 p-4">{dashboard}</div>
        <div className="w-1/2 p-4">{profile}</div>
      </div>
      {children}
    </div>
  );
}
