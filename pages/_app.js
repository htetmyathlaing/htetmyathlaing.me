import '../styles/globals.css';
import { Roboto } from 'next/font/google';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const isHome = router.pathname === '/';

    return (
        <div className={roboto.className}>
            {!isHome && <Navbar />}
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;