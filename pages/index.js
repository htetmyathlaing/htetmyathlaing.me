import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Typewriter from '../components/Typewriter';

export default function Profile() {

    return (
        <div className="bg-gray-900 text-white min-h-screen relative">
            <div className="absolute inset-0 z-0">
                <Image src="/img/profile.jpeg" alt="Profile Photo" layout="fill" objectFit="cover" className="opacity-20" />
            </div>
            <Navbar />
            <main className="flex flex-col md:flex-row items-center justify-center p-8 relative">
                <div className="md:w-1/2 text-center md:text-left md:mr-8">
                    <h1 className="text-5xl font-bold mb-4">I&apos;m <span className="font-josefin"> Htet Myat</span>,</h1>
                    <h1 className="text-3xl font-bold mb-4 text-gray-300">A Software Engineer</h1>
                    <Typewriter text="who wants to live alive peacefully..." className="text-gray-400 font-josefin" />
                    <div className="text-lg flex items-center justify-center md:justify-start font-montserrat">
                        <span className="text-5xl font-bold text-white">7</span>
                        <span className="text-5xl font-bold text-indigo-500">+</span>
                        <span className="text-sm text-white ml-2 leading-tight">
                            years of<br />experience
                        </span>
                    </div>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0">
                    <section className="p-8">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">About Me</h2>
                                <p className="mb-4">
                                    I&apos;m a dedicated software engineer with 7+ years of experience in web technologies.
                                    <br />
                                    Primarily focused on backend technologies. 
                                    <br />
                                    I have extensive experience with Laravel. 
                                    <br />
                                    I love solving complex problems and optimizing server-side performance.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">My Work</h2>
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Follow Me</h2>
                                <div className="flex flex-wrap space-x-4">
                                    <a href="https://facebook.com" className="hover:text-indigo-400"><FaFacebook size={24} /></a>
                                    <a href="https://twitter.com" className="hover:text-indigo-400"><FaTwitter size={24} /></a>
                                    <a href="https://instagram.com" className="hover:text-indigo-400"><FaInstagram size={24} /></a>
                                    <a href="https://linkedin.com" className="hover:text-indigo-400"><FaLinkedin size={24} /></a>
                                    <a href="https://youtube.com" className="hover:text-indigo-400"><FaYoutube size={24} /></a>
                                    <a href="https://github.com" className="hover:text-indigo-400"><FaGithub size={24} /></a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
