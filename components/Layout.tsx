import { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';

interface Props {
  children: ReactNode;
  home: boolean;
}

export default function Layout({ children, home }: Props) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      {children}
    </div>
  );
}
