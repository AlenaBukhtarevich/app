import React, { useState, useEffect } from "react";
import WordRow from "../WordRow/WordRow";
import WordCarousel from "../WordCarousel/WordCarousel";
import { observer } from "mobx-react";
import wordStore from "../../store/WordStore";
import "./Main.css";

const Main = observer(() => {
  const [newWord, setNewWord] = useState({
    name: "",
    translate: "",
    transcription: "",
    meaning: "",
    subject: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    wordStore.fetchWords();
  }, []);

  const handleInputChange = (e) => {
    setNewWord({
      ...newWord,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields before submitting
    if (!newWord.name || !newWord.translate || !newWord.transcription) {
      setFormError("Заполните все обязательные поля!");
      return;
    }

    wordStore.addWord(newWord); // Add new word to the store (and API)
    setNewWord({
      name: "",
      translate: "",
      transcription: "",
      meaning: "",
      subject: "",
    });
    setIsFormVisible(false);
    setFormError("");
  };

  return (
    <main>
      <button onClick={() => setIsFormVisible(!isFormVisible)}>
        {isFormVisible ? "Отменить" : "Добавить новое слово"}
      </button>

      {isFormVisible && (
        <form className="add-word-form" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Слово"
            value={newWord.name}
            onChange={handleInputChange}
          />
          <input
            name="translate"
            placeholder="Перевод"
            value={newWord.translate}
            onChange={handleInputChange}
          />
          <input
            name="transcription"
            placeholder="Транскрипция"
            value={newWord.transcription}
            onChange={handleInputChange}
          />
          <input
            name="meaning"
            placeholder="Значение"
            value={newWord.meaning}
            onChange={handleInputChange}
          />
          <input
            name="subject"
            placeholder="Тема"
            value={newWord.subject}
            onChange={handleInputChange}
          />
          {formError && <p className="error">{formError}</p>}
          <button type="submit">Сохранить</button>
        </form>
      )}

      <table className="words-table">
        <thead>
          <tr>
            <th>Слово</th>
            <th>Перевод</th>
            <th>Транскрипция</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {wordStore.words.map((word) => (
            <WordRow
              key={word.id}
              word={word}
              onEdit={wordStore.updateWord}
              onDelete={wordStore.deleteWord}
            />
          ))}
        </tbody>
      </table>

      <WordCarousel />
    </main>
  );
});

export default Main;
