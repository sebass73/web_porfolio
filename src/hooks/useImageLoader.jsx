import { useState, useEffect } from 'react';

const useImageLoader = (imageUrls) => {
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    let loadedImages = 0;
    const totalImages = imageUrls.length;

    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedImages += 1;
        if (loadedImages === totalImages) {
          setAllImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedImages += 1;
        if (loadedImages === totalImages) {
          setAllImagesLoaded(true);
        }
      };
    });
  }, [imageUrls]);

  return allImagesLoaded;
}

export default useImageLoader;