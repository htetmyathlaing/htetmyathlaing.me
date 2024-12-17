import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="bg-primary-dark min-h-screen flex flex-col items-center justify-center" style={{ minHeight: 'calc(100vh - 6rem)' }}>
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-2xl text-gray-100 mb-8">Page Not Found</p>
      <Link href="/" className="text-indigo-500 text-xl hover:text-indigo-400">
        Go back to Home
      </Link>
    </div>
  );
}
