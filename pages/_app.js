import Header from '../templates/layout/header';
import Footer from '../templates/layout/footer';
import '../styles/styles.scss';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;


