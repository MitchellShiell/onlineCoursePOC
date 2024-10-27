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

  return (
    <div className={styles.h5pContainer}>
      <div className={styles.h5pWrapper}>        
        <iframe 
          src={`/H5P-Content/${contentId}/index.html`}
          title={title}
          className={`${styles.h5pFrame}`}
          allowFullScreen
          scrolling="no"
          style={minHeight ? { minHeight } : undefined}
        />
      </div>
    </div>
  );
};

export default H5PLocalHTML;

