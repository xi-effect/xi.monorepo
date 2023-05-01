/* eslint-disable @next/next/no-img-element */
/* eslint-disable global-require */
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: React.ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Guides',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: <>Рассказываем как писать код</>,
  },
  {
    title: 'Components',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: <>Документируем, приводим примеры и работаем с нашими компонентами.</>,
  },
  {
    title: 'API',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: <>Когда-нибудь мы сделаем этот раздел</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
