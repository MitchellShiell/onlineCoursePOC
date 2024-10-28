import React from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

interface Item {
  title: string;
  description: string;
  link: string;
}

interface CardProps extends Item {
  image?: string;
}

const Card: React.FC<CardProps> = ({ title, description, link, image }) => (
  <a href={link} className={styles.card}>
    {image && <img src={image} alt={`${title} icon`} className={styles.cardImage} />}
    <Heading as="h4" className={styles.cardTitle}>{title}</Heading>
    <p className={styles.cardDescription}>{description}</p>
  </a>
);

const items: Item[] = [
  {
    title: 'Docusaurus',
    description: 'Details of this docusaurus site',
    link: '/course/overview/Docusaurus'
  },
  {
    title: 'H5P Integration',
    description: 'Details on the H5P integration',
    link: '/course/overview/H5P'
  },
  {
    title: 'Deployment',
    description: 'Overview of deployment steps',
    link: '/course/overview/Deployment'
  }
];

const FundingBadge = () => (
  <div className={styles.fundingBadge}>
    <div className={styles.fundingContent}>
      <Heading as="h3" className={styles.fundingTitle}>Contributions</Heading>
      <p className={styles.fundingDescription}>
      Created by the Ontario Institute of Cancer Research in collaboration with the Pan-Canadian Genome Library (PCGL) and Bioinformatics.ca with the supported of grant #Y01-XXXXXXXX from the X.Y.Z.</p>
      <a href="community/funding" className={styles.fundingLink}>Learn More</a>
    </div>
  </div>
);


const SiteMap: React.FC = () => {
  return (
    <section className={styles.siteMap}>
      <div className={styles.container}>
        <div className={styles.categorySection}>
          <Heading as="h2" className={styles.categoryHeader}>Documentation</Heading>
          <p className={styles.categorySubheader}>Implementation and administration details of this POC</p>
          <div className={styles.cardGrid}>
            {items.map((props, idx) => (
              <Card key={idx} {...props} />
            ))}
          </div>
        </div>
        <FundingBadge />
      </div>
    </section>
  );
};

export default SiteMap;