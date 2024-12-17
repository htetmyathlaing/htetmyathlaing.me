import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [isOpenNavBar, setIsOpenNavBar] = useState(false);
  const router = useRouter();
  const isHome = router.pathname === '/';

  return (
    <header
      className={`relative z-10 text-white ${isHome ? 'bg-transparent' : ''}`}
    >
      <svg
        className="absolute left-0 top-0 z-0 h-28 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: '#6B21A8', stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: '#4338CA', stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          d="M0,320L48,288C96,256,192,192,288,176C384,160,480,192,576,208C672,224,768,224,864,208C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="relative z-10 bg-transparent p-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl">
            <Link href="/" className="hover:text-indigo-400">
              My Portfolio
            </Link>
          </div>
          <nav className="hidden space-x-6 md:flex">
            <Link href="/" className="hover:text-indigo-400">
              Home
            </Link>
            <Link href="/blogs" className="hover:text-indigo-400">
              Blogs
            </Link>
          </nav>
          <button
            className="z-20 md:hidden"
            onClick={() => setIsOpenNavBar(!isOpenNavBar)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpenNavBar && (
        <div className="fixed inset-0 z-20 flex flex-col items-center justify-center space-y-4 bg-primary-dark bg-opacity-90">
          <button
            className="absolute right-4 top-4"
            onClick={() => setIsOpenNavBar(false)}
          >
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <Link
            href="/"
            className="hover:bg-indigo-700"
            onClick={() => setIsOpenNavBar(false)}
          >
            Home
          </Link>
          <Link
            href="/blogs"
            className="hover:bg-indigo-700"
            onClick={() => setIsOpenNavBar(false)}
          >
            Blogs
          </Link>
        </div>
      )}
    </header>
  );
}
