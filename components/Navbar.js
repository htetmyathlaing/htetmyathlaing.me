import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { FaSpinner } from 'react-icons/fa';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const isHome = router.pathname === '/';

    const handleNavLinkClick = () => {
        setIsLoading(true);
        setIsOpen(false);
    };

    return (
        <header className={`relative text-white z-10 ${isHome ? 'bg-transparent': ''}`}>
            <svg className="absolute top-0 left-0 w-full h-28 z-0" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#6B21A8', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#4338CA', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
                <path fill="url(#gradient)" d="M0,320L48,288C96,256,192,192,288,176C384,160,480,192,576,208C672,224,768,224,864,208C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
            <div className="bg-transparent p-6 relative z-10">
                <div className="flex justify-between items-center">
                    <div className="text-2xl">
                        <Link href="/" className="hover:text-indigo-400">My Portfolio</Link>
                    </div>
                    <nav className="hidden md:flex space-x-6">
                        <Link href="/" className="hover:text-indigo-400">Home</Link>
                        <Link href="/blogs" className="hover:text-indigo-400">Blogs</Link>
                    </nav>
                    <button className="md:hidden z-20" onClick={() => setIsOpen(!isOpen)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="fixed inset-0 bg-primary-dark bg-opacity-90 z-20 flex flex-col items-center justify-center">
                    <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <Link href="/" className="hover:bg-indigo-700" onClick={() => handleNavLinkClick()}>
                        Home
                    </Link>
                    <Link href="/blogs" className="hover:bg-indigo-700" onClick={() => handleNavLinkClick()}>
                        Blogs
                    </Link>
                </div>
            )}
            {isLoading && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-30 flex items-center justify-center">
                    <div className="text-2xl font-bold text-indigo-500">
                        <FaSpinner className="animate-spin" /> 
                    </div>
                </div>
            )}
        </header>
    );
}
