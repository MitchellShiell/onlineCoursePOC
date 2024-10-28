import React from 'react';
import styles from './styles.module.css';

const FundingStatement: React.FC = () => (
  <div className={styles.fundingStatement}>
    <div className={styles.fundingStatementInner}>
      
      <section className={styles.statementSection}>
        <h4 className={styles.fundingStatementTitle}>Created by</h4>
        {/* <div className={styles.divider} /> */}
        <p className={styles.fundingStatementText}>
          The Ontario Institute of Cancer Research in collaboration with the Pan-Canadian Genome Library (PCGL) and Bioinformatics.ca
        </p>
      </section>

      <section className={styles.statementSection}>
        <h4 className={styles.fundingStatementTitle}>With The Supported Of</h4>
        {/* <div className={styles.divider} /> */}
        <p className={styles.fundingStatementText}>
          Grant #Y01-XXXXXXXX from the X.Y.Z
        </p>
      </section>

    </div>
  </div>
);

export default FundingStatement;