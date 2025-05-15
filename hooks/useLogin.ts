'use client';

import useSWRMutation from 'swr/mutation';
import axiosInstance from '@/lib/axios';
import { LoginData, LoginResponse } from '@/types';

const useLogin = () => {
  const { trigger, isMutating, error } = useSWRMutation(
    '/auth/login',
    async (url, { arg }: { arg: LoginData }) => {
      const res = await axiosInstance.post<LoginResponse>(url, arg);
      return res.data;
    }
  );

  const login = async (data: LoginData) => {
    try {
      await trigger(data);
      return true;
    } catch {
      return false;
    }
  };

  return { login, isLoading: isMutating, error: error?.message };
};

export default useLogin;
