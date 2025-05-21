'use client';

export default function ProtectedError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="p-4 text-center">
      <h1 className="text-xl font-bold text-destructive">
        Error in Protected Route
      </h1>
      <p className="mt-2 text-gray-600">{error.message}</p>
      <button
        onClick={reset}
        className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary-hover"
      >
        Retry
      </button>
    </div>
  );
}
