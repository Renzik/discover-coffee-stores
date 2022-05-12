import { NextPageWithLayout } from 'next';
import Head from 'next/head';
// components
import Banner from '@components/Banner';
import AppLayout from '@components/layouts/AppLayout';
// styles
import styles from '@styles/Home.module.css';
import Image from 'next/image';

const Home: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/static/background.png' />
      </Head>
      <main className={styles.main}>
        <div className={styles.heroImage}>
          <Image src='/static/hero-image.png' alt='' width={700} height={400} />
        </div>
        <Banner buttonText='View stores nearby' handleOnClick={() => console.log('hello there')} />
      </main>
    </div>
  );
};

// Home.getLayout = function getLayout(page: ReactElement) {
//   return <AppLayout>{page}</AppLayout>;
// };

Home.layout = AppLayout;

export default Home;
