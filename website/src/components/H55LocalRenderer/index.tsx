import React, { useEffect, useRef, useState } from 'react';

const H5PLocalRenderer = ({ 
  contentId, 
  title = 'H5P Content',
  minHeight = '400px',
  maxWidth = '1000px'
}) => {
  const iframeRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load H5P resizer script
    const script = document.createElement('script');
    script.src = '/H5P/h5p-resizer.js';
    script.async = true;
    
    script.onerror = () => {
      setError('Failed to load H5P resizer script');
      setIsLoading(false);
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setError('Failed to load H5P content');
    setIsLoading(false);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-800">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-900 dark:border-gray-100 border-t-transparent" />
        </div>
      )}
      
      {error && (
        <div className="p-4 text-red-600 dark:text-red-400 text-center bg-red-50 dark:bg-red-900/20 rounded-lg">
          {error}
        </div>
      )}
      
      {!error && (
        <div className="mx-auto rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-lg"
             style={{ maxWidth }}>
          <iframe 
            ref={iframeRef}
            src={`/H5P/${contentId}/index.html`}
            title={title}
            className="w-full border-0 transition-opacity duration-300"
            style={{ 
              minHeight,
              opacity: isLoading ? 0 : 1
            }}
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
};

export default H5PLocalRenderer;