import Head from 'next/head';
import CardInput from '../components/layout/CardInput';
import CardPainel from '../components/layout/CardPainel';
import Column from '../components/layout/Column';
import Row from '../components/layout/Row';
import Header from '../widgets/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>ED- TODO</title>
      </Head>
      <div>
        <Header />
        <main>
          <Row className="two">
            <Column>
              <CardPainel />
            </Column>
            <Column>
              <CardInput />
            </Column>
          </Row>
        </main>
      </div>
    </>
  );
}
