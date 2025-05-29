import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
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

  if (!provider && !token) {
    redirect('/login');
  }

  return (
    <div className="bg-gray-light flex flex-col">
      <Topbar />
      <div className=" flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 overflow-y-auto w-full h-full">
          {children}
        </main>
      </div>
    </div>
  );
}
