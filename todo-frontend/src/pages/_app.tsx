import GloboStyles from '../shared/styles/globalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GloboStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
