import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import WordRow from "../WordRow/WordRow";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import "./Main.css";

function Main() {
  const { words, loading, error, editWord, deleteWord } =
    useContext(AppContext);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <main>
      <table className="words-table">
        <thead>
          <tr>
            <th>Слово</th>
            <th>Транскрипция</th>
            <th>Перевод</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word) => (
            <WordRow
              key={word.id}
              word={word}
              onEdit={editWord}
              onDelete={deleteWord}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Main;
