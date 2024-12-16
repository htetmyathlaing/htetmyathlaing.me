import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-8">Page Not Found</p>
      <Link href="/" className="text-blue-500 text-xl">
        Go back to Home
      </Link>
    </div>
  );
}
