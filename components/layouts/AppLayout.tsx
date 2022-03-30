import Head from 'next/head';
import React from 'react';
import Footer from '../Footer';

type AppLayoutProps = {
  title?: string;
};

const AppLayout: React.FC<AppLayoutProps> = ({ children, title = 'Discover Coffee Stores' }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div>Header</div>
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default AppLayout;
