import Head from 'next/head';
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
            <Column>Coluna de cadastro</Column>
          </Row>
        </main>
      </div>
    </>
  );
}
