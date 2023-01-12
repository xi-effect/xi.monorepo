import { ReactNode } from 'react';
import Head from 'next/head';

export type LayoutPagesT = {
  title?: string;
  noIndex?: boolean;
  children: ReactNode;
};

const getHostname = () => 
  // @ts-ignore
   typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : ''
;

export const LayoutPages = ({ title, noIndex = false, children }: LayoutPagesT) => {
  const hostname = getHostname();

  return (
    <>
      <Head>
        <title>{`xi.effect ${title ? `| ${title}` : ''}`}</title>
        {(noIndex || hostname.includes('netlify')) && <meta name="robots" content="noindex" />}
      </Head>
      {children}
    </>
  );
};
