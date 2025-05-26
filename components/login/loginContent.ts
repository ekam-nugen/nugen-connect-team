import { LoginContentItem } from './types';

export const LoginContent: LoginContentItem[] = [
  {
    type: 'input',
    inputs: [
      { name: 'email', label: 'Email', type: 'email' },
      { name: 'password', label: 'Password', type: 'password' },
    ],
  },
  {
    type: 'subtitle',
    label: 'Or login with',
  },
  {
    type: 'link',
    label: 'Forgot your password?',
    link: {
      href: '/forgot-password',
      label: 'Reset here',
    },
  },
];
