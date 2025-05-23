'use client';

import {
  EMAIL,
  EMAIL_CAPITAL,
  LOGIN,
  LOGIN_LOADING,
  PASSWORD,
  PASSWORD_CAPITAL,
  SUBMIT,
} from '@/lib/en';
import { FormEvent } from 'react';

interface LoginFormProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  error: string | null;
}

export default function LoginForm({
  onSubmit,
  isLoading,
  error,
}: LoginFormProps) {
  return (
    <div className="bg-background p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-center">{LOGIN}</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label
            htmlFor={EMAIL}
            className="block text-sm font-medium text-gray-text"
          >
            {EMAIL_CAPITAL}
          </label>
          <input
            id={EMAIL}
            name={EMAIL}
            type={EMAIL}
            required
            className="mt-1 w-full p-2 border border-gray-subtle rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={isLoading}
          />
        </div>
        <div>
          <label
            htmlFor={PASSWORD}
            className="block text-sm font-medium text-gray-text"
          >
            {PASSWORD_CAPITAL}
          </label>
          <input
            id={PASSWORD}
            name={PASSWORD}
            type={PASSWORD}
            required
            className="mt-1 w-full p-2 border border-gray-subtle rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={isLoading}
          />
        </div>
        {error && <p className="text-destructive text-sm">{error}</p>}
        <button
          type={SUBMIT}
          className="w-full bg-primary text-primary-foreground p-2 rounded-md hover:bg-primary-hover disabled:bg-blue-300"
          disabled={isLoading}
        >
          {isLoading ? LOGIN_LOADING : LOGIN}
        </button>
      </form>
    </div>
  );
}
