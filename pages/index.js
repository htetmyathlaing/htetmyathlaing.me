import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/profile/Hero';
import About from '../components/profile/About';
import Occupation from '../components/profile/Occupation';
import Contact from '../components/profile/Contact';

export default function Profile() {
    return (
        <div className="bg-gray-900 text-white min-h-screen relative">
            <div className="absolute inset-0 z-0">
                <Image src="/img/profile.jpeg" alt="Profile Photo" layout="fill" objectFit="cover" className="opacity-20" />
            </div>
            <Navbar />
            <main className="flex flex-col md:flex-row items-center justify-center px-0 py-4 md:px-20 lg:px-32 xl:px-32 relative">
                <Hero />
                <div className="md:w-1/2 mt-8 md:mt-0">
                    <section className="p-8">
                        <div className="space-y-8 leading-8">
                            <About />
                            <Occupation />
                            <Contact />
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
