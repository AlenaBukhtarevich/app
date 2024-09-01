import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WordCard from "../WordCard/WordCard";
import styles from "./WordCarousel.module.css";

function WordCarousel({ words = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === words.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? words.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles["carousel-container"]}>
      <button
        onClick={handlePrev}
        className={styles["carousel-button left-button"]}
      >
        ←
      </button>
      <AnimatePresence emode="wait">
        <motion.div
          key={currentIndex}
          className={styles["carousel-card"]}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <WordCard word={words[currentIndex]} />
        </motion.div>
      </AnimatePresence>
      <button
        onClick={handleNext}
        className={styles["carousel-button right-button"]}
      >
        →
      </button>
    </div>
  );
}

export default WordCarousel;
