import React, { useState, useEffect } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  imageKey?: string;
}

const CDN_FALLBACKS: Record<string, string> = {
  hero: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80",
  "dr-zelka": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80",
  "smile-makeover": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
  "clinic-lounge": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
  "dental-implants": "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80",
  "clear-aligners": "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80",
  "botox-wellness": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
  "smile-before": "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=1200&q=80",
  "smile-after": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
};

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
    const key = imageKey || (typeof src === 'string' ? src.split('/').pop()?.replace(/\.[^/.]+$/, '') : '');

    if (attempt === 0 && key) {
      setAttempt(1);
      // Try /assert/images/ path
      setCurrentSrc(`/assert/images/${key}.jpg`);
    } else if (attempt === 1 && key) {
      setAttempt(2);
      // Try /assets/images/ path
      setCurrentSrc(`/assets/images/${key}.jpg`);
    } else if (attempt === 2) {
      setAttempt(3);
      if (key && CDN_FALLBACKS[key]) {
        setCurrentSrc(CDN_FALLBACKS[key]);
      } else if (fallbackSrc) {
        setCurrentSrc(fallbackSrc);
      }
    } else if (attempt === 3 && fallbackSrc && currentSrc !== fallbackSrc) {
      setAttempt(4);
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
