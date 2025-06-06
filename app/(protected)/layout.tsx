import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Topbar from '@/components/topbar';
import Sidebar from '@/components/sidebar';
import { apiRequest } from '@/lib/serverApi';
import { endpoints } from '@/lib/endpoints';
import { SidebarDataType } from '@/components/sidebar/types';
import { TopbarType } from '@/components/topbar/types';

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
  const response: {
    data: {
      topbar: TopbarType;
      sidebar: SidebarDataType[];
    };
  } = await apiRequest(endpoints.layout);
  const { topbar, sidebar } = response?.data ?? {};

  return (
    <div className="bg-gray-light flex flex-col">
      <Topbar topbarData={topbar} />
      <div className=" flex flex-1">
        <Sidebar sideBarData={sidebar} />
        <main className="flex-1 p-4 overflow-y-auto w-full h-full">
          {children}
        </main>
      </div>
    </div>
  );
}
