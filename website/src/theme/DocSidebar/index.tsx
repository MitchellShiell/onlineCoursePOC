import React from 'react';
import DocSidebar from '@theme-original/DocSidebar';
import type DocSidebarType from '@theme/DocSidebar';
import type {WrapperProps} from '@docusaurus/types';
import FundingStatement from '@site/src/components/FundingStatement';
import styles from './styles.module.css';

type Props = WrapperProps<typeof DocSidebarType>;

export default function DocSidebarWrapper(props: Props): JSX.Element {
  return (
    <div className={styles.sidebarWrapper}>
      <DocSidebar {...props} />
      <div className={styles.fundingStatementContainer}>
        <FundingStatement />
      </div>
    </div>
  );
}
