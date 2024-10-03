import React, { useState, useEffect } from "react";
import WordRow from "../WordRow/WordRow";
import { observer } from "mobx-react";
import wordStore from "../../store/WordStore";
import "./Main.css";

const Main = observer(() => {
  const [newWord, setNewWord] = useState({
    russian: "",
    english: "",
    transcription: "",
  });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formError, setFormError] = useState("");
  const [showTranslation, setShowTranslation] = useState({});

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

    if (!newWord.russian || !newWord.english || !newWord.transcription) {
      setFormError("Заполните все обязательные поля!");
      return;
    }

    wordStore.addWord(newWord);
    setNewWord({
      russian: "",
      english: "",
      transcription: "",
    });
    setIsFormVisible(false);
    setFormError("");
  };

  const handleEditWord = (updatedWord) => {
    wordStore.updateWord(updatedWord);
  };

  const handleDeleteWord = (id) => {
    wordStore.deleteWord(id);
  };

  const toggleTranslation = (id) => {
    setShowTranslation((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <main>
      {isFormVisible && (
        <form className="add-word-form" onSubmit={handleSubmit}>
          <input
            name="russian"
            placeholder="Слово"
            value={newWord.russian}
            onChange={handleInputChange}
          />
          <input
            name="english"
            placeholder="Перевод"
            value={newWord.english}
            onChange={handleInputChange}
          />
          <input
            name="transcription"
            placeholder="Транскрипция"
            value={newWord.transcription}
            onChange={handleInputChange}
          />
          {formError && <p className="error">{formError}</p>}
          <button type="submit">Сохранить</button>
        </form>
      )}

      <button onClick={() => setIsFormVisible(!isFormVisible)}>
        {isFormVisible ? "Отменить" : "Добавить новое слово"}
      </button>

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
              showTranslation={showTranslation[word.id]}
              toggleTranslation={() => toggleTranslation(word.id)}
              onEdit={handleEditWord}
              onDelete={handleDeleteWord}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
});

export default Main;
