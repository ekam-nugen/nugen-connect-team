import { FaArrowLeft } from 'react-icons/fa6';
import { LoginContentType, OTPVerificationContentType } from './types';

//login page json
export const LoginContent: LoginContentType[] = [
  { type: 'title', label: 'Welcome' },
  { type: 'subtitle', label: 'Log in to your company app' },
  { type: 'input', label: 'We’ll send you a code to verify your number' },
  { type: 'button', label: 'Verify' },
  {
    type: 'subtitle',
    label: 'Don’t have an account?',
    link: { type: 'link', label: 'Create one now', href: '/signup' },
  },
];
//otp vertification json
export const OTPVerificationContent: OTPVerificationContentType[] = [
  { type: 'icon', icon: FaArrowLeft },
  { type: 'heading', label: 'Enter the 4-digit code' },
  { type: 'sub-heading', label: 'Sent to your number' },
  { type: 'otp', length: 4 },
  {
    type: 'sub-heading',
    label: 'Didn’t get the code?',
    link: { type: 'span', label: 'More options' },
  },
  {
    type: 'more-options',
    options: [
      { type: 'span', label: 'Resend OTP' },
      { type: 'span', label: 'Get a call instead' },
      { type: 'span', label: 'Send to email' },
    ],
  },
  {
    type: 'button',
    label: 'Verify',
  },
];
