
import './gallery.css'
import React, { useEffect, useState } from 'react';

export default function Gallery({images,interval}) {
    const [currentIndex, setcurrentindex] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        // Increment index with wrapping
        setcurrentindex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);
  
      // Clear timer on component unmount
      return () => clearTimeout(timer);
    }, [currentIndex, images.length, interval]);
    

  return (
    <div className='gallery-container'>
      <h2>GALLERY</h2>
      <div className='slider'>
        <div className='myslide'>
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
        </div>
      </div>
    </div>
  )
}
