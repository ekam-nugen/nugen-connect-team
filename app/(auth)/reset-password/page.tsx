import PageLoader from '@/base-components/loader';
import ResetPassword from '@/components/resetPassword';
import { Suspense } from 'react';

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-x-hidden">
      <Suspense fallback={<PageLoader />}>
        <ResetPassword />
      </Suspense>
    </div>
  );
}
