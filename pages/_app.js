import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const isHome = router.pathname === '/';

    return (
        <>
            {!isHome && <Navbar />}
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;