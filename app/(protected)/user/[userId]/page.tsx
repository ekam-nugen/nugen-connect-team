import axiosInstance from '@/lib/axios';
import { cookies } from 'next/headers';

type Params = Promise<{ userId: string }>;
export default async function UserPage({ params }: { params: Params }) {
  const { userId } = await params;
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  const user = await axiosInstance.get(`/user?userId=${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">User Profile</h1>
      <p>Email: {user.data.email}</p>
      <p>Name: {user.data.name}</p>
    </div>
  );
}
