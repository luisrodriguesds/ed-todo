import Head from 'next/head';
import Header from '../widgets/Header';
import Main from '../widgets/Main';

export default function Home() {
  return (
    <>
      <Head>
        <title>ED- TODO</title>
      </Head>
      <Header />
      <Main />
    </>
  );
}
