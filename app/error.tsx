'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-destructive">
          Something went wrong!
        </h1>
        <p className="mt-2 text-gray-600">{error.message}</p>
        <button
          onClick={reset}
          className="mt-4 bg-primary text-accent px-4 py-2 rounded hover:bg-primary-hover"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
