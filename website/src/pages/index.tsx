import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';


import styles from './index.module.css';
import SiteMap from '../components/SiteMap';



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
            to="/course/overview">
            Get Started
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
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <SiteMap />
      <main>
        {/* <div className="col col--8 col--offset-2 padding-top--lg">
          <h2 className="margin-top--md text-center">Research Data Management Course</h2>
          
          <div className="margin-bottom--md">
            <p>
              Welcome to this proof of concept course site built with Docusaurus. The course is aimed at teaching foundational research data management skills through interactive content and structured learning. Developed in collaboration with OICR, PCGL & bioinformatics.ca this proof of concept organizes markdown files (mdx) that support H5P content integration with additional and optional community resources.
            </p>
          </div>
          <h2 className="margin-top--md text-center">Course Aims & Topics</h2>

          <div className={styles.gridContainer}>
            <div className={styles.card}>
              <p className="margin--none">
                <strong>Target Audience:</strong> This will be an introductory course targeting graduate students and faculty members
              </p>
            </div>
            
            <div className={styles.card}>
              <p className="margin--none">
                <strong>Course Features:</strong> Open Access • Self-paced learning • Interactive content • Comprehensive assessment • 
                English-only • Non-credit
              </p>
            </div>
            <div className={styles.card}>
              <p className="margin--none">
                <strong>Covering RDM Best Practices:</strong> Integrate data management planning into research workflows effectively.
              </p>
            </div>
            
            <div className={styles.card}>
              <p className="margin--none">
                <strong>& Data Repository Management:</strong> Master data deposit processes, curation, and metadata standards.
              </p>
            </div>
          </div>
        </div> */}
      </main>
    </Layout>
  );
 }