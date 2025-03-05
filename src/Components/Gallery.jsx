import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
import '../css/aboutUs.css'

function Gallery() {
    const fadeImages = [
        {
          url: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?quality=90&webp=true&resize=375,341'
        },
        {
          url: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
          url: '../src/images/coffeePhoto.jpg'
        },
      ];

  return (
    <div className="gallery-container">
        <div className="slide-container">
            <Fade>
                {fadeImages.map((fadeImage, index) => (
                    <div key={index} className="slide">
                        <img className="slide-image" src={fadeImage.url} alt={`Slide ${index}`} />
                    </div>
                ))}
            </Fade>
        </div>
    </div>
  );
}

export default Gallery;
