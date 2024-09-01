import React, { useState, useEffect } from "react";
import WordCarousel from "../WordCarousel/WordCarousel";
import "./WordGame.module.css";

function WordGame({ fetchWords }) {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Предполагается, что fetchWords — это функция, которая запрашивает слова с сервера
    async function getWords() {
      try {
        const fetchedWords = await fetchWords();
        setWords(fetchedWords);
      } catch (error) {
        console.error("Ошибка при загрузке слов:", error);
      } finally {
        setLoading(false);
      }
    }

    getWords();
  }, [fetchWords]);

  if (loading) {
    return <div className={styles.wordgame}>Загрузка слов...</div>;
  }

  if (words.length === 0) {
    return (
      <div className={styles.wordgame}>Нет доступных слов для тренировки.</div>
    );
  }

  return (
    <div className={styles.wordgame}>
      <h2>Тренажёр слов</h2>
      <WordCarousel words={words} />
    </div>
  );
}

export default WordGame;
