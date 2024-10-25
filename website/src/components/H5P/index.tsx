import React, { useEffect } from 'react';
import styles from './H5P.module.css';

const H5P = ({ src, title = 'H5P Content', height = '400px' }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const embedUrl = src.endsWith('/embed') ? src : `${src}/embed`;

  return (
    <div className={styles.h5pWrapper}>
      <iframe 
        src={embedUrl}
        title={title}
        className={styles.h5pFrame}
        style={{ height }}
        allowFullScreen
      />
    </div>
  );
};

export default H5P;