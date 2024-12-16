import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [isScrolledTop, setIsScrolledTop] = useState(false);
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledTop(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsHome(router.pathname === '/');
  }, [router.pathname]);

  return (
    <header className="relative w-full bg-gradient-to-r from-purple-700 to-indigo-700 text-white">
      <div className={`container flex flex-col items-start pt-10 pb-16 md:pt-20 md:pb-36 ${ isScrolledTop ? 'mx-0' : 'pl-4 md:mx-auto'}`}>
        <nav className={`z-10 flex space-x-4 transition-all duration-300 ${isScrolledTop ? 'fixed top-0 w-full bg-gradient-to-r from-purple-700 to-indigo-700 shadow-lg p-4 md:pl-32 md:py-4' : 'absolute'}`} style={{ transform: `${isScrolledTop ? 'translateY(0%)':'translateY(-85%)'}` }}>
          <Link href="/" className={`text-lg no-underline ${isHome ? 'font-bold underline' : ''}`}>
            Home
          </Link>
          <Link href="/blogs" className={`text-lg no-underline ${router.pathname.startsWith('/blogs') ? 'font-bold underline' : ''}`}>
            Blogs
          </Link>
        </nav>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0 C600,100 1200,0 1200,120 L0,120 Z" fill="#f4f4f4" transform="scale(-1, 1) translate(-1200, 0)"></path>
        </svg>
      </div>
    </header>
  );
}
