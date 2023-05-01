/* eslint-disable global-require */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--secondary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="https://discord.gg/hfYf7MvXUV ">
            Our Discord - welcome to the Club
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageLinks() {
  return (
    <header className={clsx('hero hero--secondary', styles.heroBanner)}>
      <div className="container">
        <p className="hero__subtitle">Наши ссылки</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="https://xi.kaiten.ru/">
            Kaiten
          </Link>
        </div>
        <div className={styles['buttons-with-mt']}>
          <Link className="button button--secondary button--lg" to="https://github.com/xi-effect">
            Github
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): React.ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageLinks />
        <div className={styles['image-wrapper']}>
          <img
            className={styles.image}
            alt="frodo mem"
            src={require('@site/static/img/frodo.jpg').default}
          />
        </div>
      </main>
    </Layout>
  );
}
