'use client';

import useSWR from 'swr';
import axiosInstance from '@/lib/axios';
import { LoginData, LoginResponse, User } from '@/types';
import useSWRMutation from 'swr/mutation';
import { SignUpFormType } from '@/components/signupPage/types';

const fetcher = (url: string) => axiosInstance.get(url).then(res => res.data);

export const useAuth = () => {
  const { data, error, isLoading } = useSWR<User>('/api/user', fetcher);
  return { user: data, isLoading, error: error?.message };
};

export const useAuthSignup = () => {
  const { trigger, isMutating, error } = useSWRMutation(
    '/auth/signup',
    async (url, { arg }: { arg: SignUpFormType }) => {
      const res = await axiosInstance.post(url, arg);
      return res.data;
    }
  );

  const Signup = async (data: SignUpFormType) => {
    try {
      await trigger(data);
      return true;
    } catch (err) {
      return false;
    }
  };

  return { Signup, isLoading: isMutating, error: error?.message };
};

export const useSocialSignup = () => {
  const signupWithSocial = async ({
    provider,
  }: {
    provider: 'google' | 'facebook';
  }) => {
    try {
      const res = await axiosInstance.get(`/auth/${provider}/login`);

      const redirectUrl = res.data?.data?.url;
      if (redirectUrl) {
        window.location.href = redirectUrl; // 🔁 Redirect to Google/Facebook
        return true;
      }

      return false;
    } catch (err) {
      console.error('Social Signup Error:', err);
      return false;
    }
  };

  return { signupWithSocial };
};

export const useLogin = () => {
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
