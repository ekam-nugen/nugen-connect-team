import { LoginContentType } from './types';

export const LoginContent: LoginContentType[] = [
  { type: 'h2', label: 'Welcome' },
  { type: 'p', label: 'Log in to your company app' },
  { type: 'input', label: 'We’ll send you a code to verify your number' },
  { type: 'button', label: 'Verify' },
  {
    type: 'p',
    label: 'Don’t have an account?',
    link: { type: 'link', label: 'Create one now', href: '/signup' },
  },
];
