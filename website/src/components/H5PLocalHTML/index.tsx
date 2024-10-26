import React, { useState } from 'react';
import styles from './styles.module.css';

interface H5PLocalHTMLProps {
  contentId: string;
  title?: string;
  minHeight?: string;
}

const H5PLocalHTML: React.FC<H5PLocalHTMLProps> = ({ 
  contentId, 
  title = 'H5P Content',
  minHeight
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div className={styles.h5pContainer}>
      <div className={styles.h5pWrapper}>
        {isLoading && (
          <div className={styles.loadingContainer}>
            <div className={styles.spinner} />
          </div>
        )}
        
        <iframe 
          src={`/H5P-Content/${contentId}/index.html`}
          title={title}
          className={`${styles.h5pFrame} ${isLoading ? styles.hidden : ''}`}
          onLoad={() => setIsLoading(false)}
          allowFullScreen
          scrolling="no"
          style={minHeight ? { minHeight } : undefined}
        />
      </div>
    </div>
  );
};

export default H5PLocalHTML;

