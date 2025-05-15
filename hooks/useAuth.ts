'use client';

import useSWR from 'swr';
import axiosInstance from '@/lib/axios';
import { User } from '@/types';

const fetcher = (url: string) => axiosInstance.get(url).then(res => res.data);

const useAuth = () => {
  const { data, error, isLoading } = useSWR<User>('/api/user', fetcher);
  return { user: data, isLoading, error: error?.message };
};

export default useAuth;
