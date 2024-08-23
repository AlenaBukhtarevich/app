import React, { useState } from "react";
import styles from "./WordCard.module.css";

function WordCard({ word, onNext, onPrev }) {
  const [isTranslationVisible, setIsTranslationVisible] = useState(false);

  return (
    <div className={styles["word-card-container"]}>
      <div className={styles["word-card"]}>
        <h2 className={styles["word-card__title"]}>{word.name}</h2>
        <p>{word.transcription}</p>
        {isTranslationVisible ? (
          <p>{word.translate}</p>
        ) : (
          <button
            className={styles["word-card__button"]}
            onClick={() => setIsTranslationVisible(true)}
          >
            Показать перевод
          </button>
        )}
      </div>
    </div>
  );
}

export default WordCard;
