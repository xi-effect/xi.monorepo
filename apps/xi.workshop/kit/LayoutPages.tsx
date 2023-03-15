import { ReactNode } from 'react';
import Head from 'next/head';
import { Navigation } from './Navigation';

export type LayoutPagesT = {
  title?: string;
  noIndex?: boolean;
  children: ReactNode;
};

function getHostname() {
  // @ts-ignore
  return typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : '';
}

export const LayoutPages = ({ title, noIndex = false, children }: LayoutPagesT) => {
  const hostname = getHostname();

  return (
    <>
      <Head>
        <title>{`xi.effect ${title ? `| ${title}` : ''}`}</title>
        {(noIndex || hostname.includes('vercel') || hostname.includes('netlify')) && (
          <meta name="robots" content="noindex" />
        )}
      </Head>
      <Navigation>{children}</Navigation>
    </>
  );
};
