'use client';
import useSWR from 'swr';
import axiosInstance from '@/lib/axios';
import {
  EmailPayloadType,
  LoginData,
  LoginResponse,
  ResetPasswordPayload,
} from '@/types';
import useSWRMutation from 'swr/mutation';
import { SignUpFormType } from '@/components/signupPage/types';
import { LoginFormType } from '@/components/login/types';

const fetcher = (url: string) => axiosInstance.get(url).then(res => res.data);

// export const useAuth = () => {
//   const { data, error, isLoading } = useSWR<User>('/user', fetcher);
//   return { user: data, isLoading, error: error?.message };
// };

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
export const useAuthLogin = () => {
  const { trigger, isMutating, error } = useSWRMutation(
    '/auth/login',
    async (url, { arg }: { arg: LoginFormType }) => {
      const res = await axiosInstance.post(url, arg);
      return res.data;
    }
  );

  const Login = async (data: LoginFormType) => {
    try {
      await trigger(data);
      return true;
    } catch (err) {
      return false;
    }
  };

  return { Login, isLoading: isMutating, error: error?.message };
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

export const useProviderCallback = (
  provider: string,
  queryParams: Record<string, string>
) => {
  const hasParams = Object.values(queryParams).some(val => val !== '');
  const queryString = new URLSearchParams(queryParams).toString();
  const url = hasParams ? `/auth/${provider}/callback?${queryString}` : null;

  const { data, error, isLoading } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
  });

  return { data, error: error?.message, isLoading };
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

export const useAuthForgotPassword = () => {
  const { trigger, isMutating, error } = useSWRMutation(
    '/auth/forgot-password',
    async (url, { arg }: { arg: EmailPayloadType }) => {
      const res = await axiosInstance.post(url, arg);
      return res.data;
    }
  );

  const forgotPassword = async (data: EmailPayloadType) => {
    try {
      await trigger(data);
      return true;
    } catch (err) {
      return false;
    }
  };

  return { forgotPassword, isLoading: isMutating, error: error?.message };
};

export const useAuthResetPassword = (token: string | null) => {
  const { trigger, isMutating, error } = useSWRMutation(
    token ? `/auth/reset-password?token=${token}` : null,
    async (url, { arg }: { arg: ResetPasswordPayload }) => {
      if (!url) throw new Error('Token is missing');
      const res = await axiosInstance.post(url, arg);
      return res.data;
    }
  );

  const resetPassword = async (data: ResetPasswordPayload) => {
    try {
      await trigger(data);
      return true;
    } catch (err) {
      return false;
    }
  };

  return { resetPassword, isLoading: isMutating, error: error?.message };
};

export const UseOnboarding = () => {
  const { data, isLoading, error } = useSWR('/onboarding', fetcher);
  return { data, isLoading, error: error?.message };
};

export const UseDashboard = () => {
  const { data, isLoading, error } = useSWR('/dashboard', fetcher);
  return { data, isLoading, error: error?.message };
};

export const UseSideBar = () => {
  const { data, isLoading, error } = useSWR('/sideBar', fetcher);
  return { data, isLoading, error: error?.message };
};
