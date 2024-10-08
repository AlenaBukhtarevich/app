import React, { useState } from "react";
import WordRow from "../WordRow/WordRow";
import WordCarousel from "../WordCarousel/WordCarousel";
import "./Main.css";

function Main() {
  // Пример данных. Позже это может быть заменено на данные из API.
  const initialWords = [
    {
      id: 1,
      name: "имя",
      translate: "name",
      transcription: "|neɪm|",
      meaning: "Личное название человека, даваемое при рождении.",
      subject: "тема",
    },
    {
      id: 2,
      name: "слово",
      translate: "word",
      transcription: "|wɜːrd|",
      meaning: "Единица языка, которая имеет значение.",
      subject: "тема",
    },
    {
      id: 3,
      name: "яблоко",
      translate: "apple",
      transcription: "|ˈæpl|",
      meaning: "Фрукт, который растет на яблоне.",
      subject: "еда",
    },
    {
      id: 4,
      name: "книга",
      translate: "book",
      transcription: "|bʊk|",
      meaning: "Печатное или рукописное произведение, содержащее текст.",
      subject: "образование",
    },
    {
      id: 5,
      name: "стол",
      translate: "table",
      transcription: "|ˈteɪbl|",
      meaning: "Мебельный предмет с плоской горизонтальной поверхностью.",
      subject: "мебель",
    },
  ];

  const [words, setWords] = useState(initialWords);

  // Обработчик для удаления слова
  const handleDelete = (id) => {
    setWords(words.filter((word) => word.id !== id));
  };

  // Обработчик для обновления слова
  const handleEdit = (updatedWord) => {
    setWords(
      words.map((word) => (word.id === updatedWord.id ? updatedWord : word))
    );
  };

  return (
    <main>
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
          {words.map((word) => (
            <WordRow
              key={word.id}
              word={word}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Main;
