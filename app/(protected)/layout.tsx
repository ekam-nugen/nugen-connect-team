import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifyToken } from '@/lib/auth';
import Topbar from '@/components/topbar';
import Sidebar from '@/components/sidebar';

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  const provider = cookieStore.get('provider')?.value;

  if (!provider && (!token || !verifyToken(token))) {
    redirect('/login');
  }

  return (
    <div className="bg-gray-100 flex flex-col">
      <Topbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}
