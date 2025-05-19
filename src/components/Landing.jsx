import { useState, useEffect } from 'react';

function Landing({ directory = 'multiverse' }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Use static imports for each directory
    const multiverseImages = import.meta.glob('/src/assets/screenshots/multiverse/*.jpg');
    const shoppingImages = import.meta.glob('/src/assets/screenshots/shopping/*.jpg');
    
    // Select the appropriate context based on directory
    const imgContext = directory === 'shopping' ? shoppingImages : multiverseImages;
    const imagePaths = [];
    
    // Load all JPG files
    Promise.all(
      Object.keys(imgContext).map((path) => {
        return imgContext[path]().then((module) => {
          imagePaths.push({ path, src: module.default });
        });
      })
    ).then(() => {
      setImages(imagePaths);
    });
  }, [directory]);

  return (
    <div className="w-full py-8">
      <div className="flex overflow-x-auto gap-4 pb-4">
        {images.map((image, index) => (
          <div key={index} className="flex-none">
            <img 
              src={image.src} 
              alt={`Gallery image ${index + 1}`}
              className="h-64 w-auto object-contain rounded-lg shadow-md" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Landing; 