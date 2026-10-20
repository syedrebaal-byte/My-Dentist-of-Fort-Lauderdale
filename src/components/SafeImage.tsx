import React, { useState, useEffect } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  imageKey?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  fallbackSrc,
  imageKey,
  alt = '',
  className = '',
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(src);
  const [attempt, setAttempt] = useState<number>(0);

  useEffect(() => {
    setCurrentSrc(src);
    setAttempt(0);
  }, [src]);

  const handleError = () => {
    if (attempt === 0 && imageKey) {
      setAttempt(1);
      // Try /assert/images/ path
      setCurrentSrc(`/assert/images/${imageKey}.jpg`);
    } else if (attempt === 1 && imageKey) {
      setAttempt(2);
      // Try /assets/images/ path
      setCurrentSrc(`/assets/images/${imageKey}.jpg`);
    } else if (attempt === 2 && fallbackSrc) {
      setAttempt(3);
      setCurrentSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
      {...props}
    />
  );
};

export default SafeImage;
