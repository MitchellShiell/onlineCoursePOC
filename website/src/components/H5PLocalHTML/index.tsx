import React, { useRef, useState } from 'react';
import styles from './styles.module.css';

const H5PLocalHTML = ({ 
  contentId, 
  title = 'H5P Content',
  minHeight = '400px'
}) => {
  const iframeRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
    
    try {
      const iframe = iframeRef.current;
      if (iframe && iframe.contentWindow) {
        const content = iframe.contentWindow.document.body;
        if (content) {
          iframe.style.height = `${content.scrollHeight}px`;
          iframe.style.width = '100%';
        }
      }
    } catch (e) {
      console.warn('Could not adjust iframe size:', e);
    }
  };

  return (
    <div className={styles.h5pContainer}>
      <div className={styles.h5pWrapper}>
        {isLoading && (
          <div className={styles.loadingContainer}>
            <div className={styles.spinner} />
          </div>
        )}
        <iframe 
          ref={iframeRef}
          src={`/H5P/${contentId}/index.html`}
          title={title}
          className={styles.h5pFrame}
          style={{ 
            minHeight,
            opacity: isLoading ? 0 : 1
          }}
          onLoad={handleIframeLoad}
          allowFullScreen
          scrolling="no"
        />
      </div>
    </div>
  );
};

export default H5PLocalHTML;