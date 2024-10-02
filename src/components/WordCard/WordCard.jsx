import React, { useState, useEffect, useRef } from "react";
import styles from "./WordCard.module.css";

function WordCard({ word, onShowTranslation }) {
  const [isTranslationVisible, setIsTranslationVisible] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
    setIsTranslationVisible(false);
  }, [word]);

  return (
    <div className={styles["word-card-container"]}>
      <div className={styles["word-card"]}>
        <h2 className={styles["word-card__title"]}>{word.russian}</h2>
        {isTranslationVisible ? (
          <>
            <p>{word.translate}</p>
            <p className={styles["word-card__title"]}>{word.english}</p>
            <p>{word.transcription}</p>
            <p>
              <strong>Тема:</strong> {word.tags}
            </p>
          </>
        ) : (
          <button
            ref={buttonRef}
            className={styles["word-card__button"]}
            onClick={() => {
              setIsTranslationVisible(true);
              onShowTranslation();
            }}
          >
            Показать перевод
          </button>
        )}
      </div>
    </div>
  );
}

export default WordCard;
