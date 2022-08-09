import { useState } from "react";
import styles from './ImageSlider.module.css'

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideImage = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  }

  const goToPrevious = () => {
    if (currentIndex != 0) {
      setCurrentIndex(prev => prev - 1)
    }
  }

  const goToNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  }

  return (
    <div className={styles['slide-container']}>
      <div onClick={goToPrevious} className={styles['left-arrow']}>&larr;</div>
      <div onClick={goToNext} className={styles['right-arrow']}>&rarr;</div>
      <div style={slideImage} className={styles.slide}></div>
    </div>
  );

}

export default ImageSlider