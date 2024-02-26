import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import "../styles/Gallery.css"

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Generate random titles and prices for images
    const generateRandomString = () => {
      return Math.random().toString(36).substring(7);
    };

    const generateRandomPrice = () => {
      return (Math.random() * 100).toFixed(2);
    };

    // Create dummy images with random titles and prices
    const dummyImages = Array.from({ length: 30 }, (_, index) => ({
      id: index,
      title: generateRandomString(),
      price: generateRandomPrice(),
    }));

    setImages(dummyImages);
  }, []);

  return (
    <div className="gallery">
      {images.map((image) => (
        <ImageCard key={image.id} title={image.title} price={image.price} />
      ))}
    </div>
  );
}

export default Gallery;
