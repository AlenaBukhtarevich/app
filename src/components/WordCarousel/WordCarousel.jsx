import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WordCard from "../WordCard/WordCard";
import { AppContext } from "../../context/AppContext";
import styles from "./WordCarousel.module.css";

function WordCarousel() {
  const { words, loading, error } = useContext(AppContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [learnedWordsCount, setLearnedWordsCount] = useState(0);

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

  const handleShowTranslation = () => {
    setLearnedWordsCount((count) => count + 1);
  };

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div className={styles.error}>Ошибка: {error}</div>;

  return (
    <div className={styles["carousel-wrapper"]}>
      <h3 className={styles["learned-words-count"]}>
        Изучено слов: {learnedWordsCount}
      </h3>
      <div className={styles["carousel-container"]}>
        <button
          onClick={handlePrev}
          className={`${styles["carousel-button"]} ${styles["left-button"]}`}
        >
          ←
        </button>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className={styles["carousel-card"]}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <WordCard
              word={words[currentIndex]}
              onShowTranslation={handleShowTranslation}
            />
          </motion.div>
        </AnimatePresence>
        <button
          onClick={handleNext}
          className={`${styles["carousel-button"]} ${styles["right-button"]}`}
        >
          →
        </button>
      </div>
    </div>
  );
}

export default WordCarousel;
