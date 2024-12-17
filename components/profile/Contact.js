import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export default function Contact() {
    return (
        <div>
            <h2 className="text-2xl mb-4">Follow Me</h2>
            <div className="flex flex-wrap space-x-4">
                <Link href="https://facebook.com/htetmyathlaing" passHref>
                    <FaFacebook size={24} className="hover:text-indigo-400" />
                </Link>
                <Link href="https://twitter.com/htetmyathlaing" passHref>
                    <FaTwitter size={24} className="hover:text-indigo-400" />
                </Link>
                <Link href="https://instagram.com/hm.htetmyathlaing" passHref>
                    <FaInstagram size={24} className="hover:text-indigo-400" />
                </Link>
                <Link href="https://www.linkedin.com/in/htetmyathlaing/" passHref>
                    <FaLinkedin size={24} className="hover:text-indigo-400" />
                </Link>
                <Link href="https://www.youtube.com/@htetmyathlaing-dev" passHref>
                    <FaYoutube size={24} className="hover:text-indigo-400" />
                </Link>
                <Link href="https://github.com/htetmyathlaing" passHref>
                    <FaGithub size={24} className="hover:text-indigo-400" />
                </Link>
            </div>
        </div>
    );
}
