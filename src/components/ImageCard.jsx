import React from 'react';
import "../styles/ImageCard.css"

const ImageCard = ({ title, price }) => {
  return (
    <div className="gallery">
      <div className='imageCard'>
        <img src="https://images.pexels.com/photos/15073866/pexels-photo-15073866/free-photo-of-close-up-of-a-camera.jpeg" alt="Placeholder"
         />
        <div className="image-details">
          <h3>{title}</h3>
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
