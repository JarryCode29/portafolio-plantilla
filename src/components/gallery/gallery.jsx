import React, { useState, useEffect } from 'react';

import './gallery.css';
import { Buton } from '../buton';

export const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      try {
        const importedImages = [
          await import('../../assets/Imagen/marca1.jpg'),
          await import('../../assets/Imagen/marca2.jpg'),
          await import('../../assets/Imagen/marca3.jpg'),
          await import('../../assets/Imagen/marca4.jpg'),
          await import('../../assets/Imagen/marca5.jpg'),
          await import('../../assets/Imagen/marca6.jpg'),
          // Agrega aquí la importación de tus imágenes
        ];
        setImages(importedImages);
      } catch (error) {
        console.error('Error al importar imágenes:', error);
      }
    };

    importImages();
  }, []);

  return (
    <section className='section-gallery'>
      <h2><b>VER PORTAFOLIO</b></h2>
      <div className='gallery'>

    
      {images.map((image, index) => (
        <img key={index} src={image.default} alt={`Imagen ${index + 1}`} />
      ))}
        </div>
      <Buton name='VER MAS' />
    </section>
  );
};
