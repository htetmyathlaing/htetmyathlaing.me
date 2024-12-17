import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaGithub, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export default function Contact() {
    return (
        <div>
            <h2 className="text-2xl mb-4">Follow Me</h2>
            <div className="flex flex-wrap space-x-4">
                <Link href="mailto:contact@htetmyathlaing.me" className="mb-4" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope size={24} className="hover:text-indigo-400" />
                </Link>
                <Link href="https://www.linkedin.com/in/htetmyathlaing/" className="mb-4" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} className="hover:text-indigo-400" />
                </Link>
                <Link href="https://facebook.com/htetmyathlaing" className="mb-4" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={24} className="hover:text-indigo-400" />
                </Link>
                <Link href="https://twitter.com/htetmyathlaing" className="mb-4" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={24} className="hover:text-indigo-400" />
                </Link>
                <Link href="https://instagram.com/hm.htetmyathlaing" className="mb-4" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={24} className="hover:text-indigo-400" />
                </Link>
                <Link href="https://www.youtube.com/@htetmyathlaing-dev" className="mb-4" target="_blank" rel="noopener noreferrer">
                    <FaYoutube size={24} className="hover:text-indigo-400" />
                </Link>
                <Link href="https://github.com/htetmyathlaing" className="mb-4" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} className="hover:text-indigo-400" />
                </Link>
            </div>
        </div>
    );
}
