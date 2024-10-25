import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import H5P from '@site/src/components/H5P';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/Course/overview">
            Click here for the rundown
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div className="container margin-vert--xl">
          <div className="row">
            <div className="col col--8 col--offset-2 text-center">
              <h2 className="margin-bottom--sm">With H5P Integration</h2>
              <p>
                Proof of concept of H5P integration into docusaurus, I'll update the pages with more sample content, components and explainations. Note the home page here would be much prettier this is just to easily show that H5P is working.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col col--8 col--offset-2">
              <H5P
                src="https://testing-oicr.h5p.com/content/1292411552878674258/embed"
                height="500px"
                title="Interactive Content"
              />
              <H5P
                src="https://testing-oicr.h5p.com/content/1292413201128160028/embed"
                height="500px"
                title="Interactive Content"
              />
              <H5P
                src="https://testing-oicr.h5p.com/content/1292413203664716658/embed"
                height="500px"
                title="Interactive Content"
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
 }