import React from 'react';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-primary-dark"
      style={{ minHeight: 'calc(100vh - 6rem)' }}
    >
      <h1 className="mb-4 text-6xl font-bold text-red-500">404</h1>
      <p className="mb-8 text-2xl text-gray-100">Page Not Found</p>
      <Link href="/" className="text-xl text-indigo-500 hover:text-indigo-400">
        Go back to Home
      </Link>
    </div>
  );
}
