import React from 'react';
import '../styles/globals.css';
import { Roboto } from 'next/font/google';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

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

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
