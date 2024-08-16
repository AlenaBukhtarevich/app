import React, { useState } from "react";

function WordRow({ word, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isTranslationVisible, setIsTranslationVisible] = useState(false);
  const [editedWord, setEditedWord] = useState(word);

  // Обработчик для отмены редактирования
  const handleCancelEdit = () => {
    setEditedWord(word); // Вернуть изначальные значения
    setIsEditing(false); // Выйти из режима редактирования
  };

  return (
    <tr>
      {isEditing ? (
        <>
          <td>
            <input
              value={editedWord.name}
              onChange={(e) =>
                setEditedWord({ ...editedWord, name: e.target.value })
              }
            />
          </td>
          <td>
            <input
              value={editedWord.translate}
              onChange={(e) =>
                setEditedWord({ ...editedWord, translate: e.target.value })
              }
            />
          </td>
          <td>
            <input
              value={editedWord.transcription}
              onChange={(e) =>
                setEditedWord({
                  ...editedWord,
                  transcription: e.target.value,
                })
              }
            />
          </td>
          <td>
            <button onClick={handleCancelEdit}>Отмена редактирования</button>
            <button
              onClick={() => {
                setIsEditing(false);
                onEdit(editedWord);
              }}
            >
              Сохранить
            </button>
          </td>
        </>
      ) : (
        <>
          <td>{word.name}</td>
          <td>
            {isTranslationVisible ? (
              <>{word.translate}</>
            ) : (
              <button onClick={() => setIsTranslationVisible(true)}>
                Показать перевод
              </button>
            )}
          </td>
          <td>{word.transcription}</td>
          <td>
            <button onClick={() => setIsEditing(true)}>Редактировать</button>
            <button onClick={() => onDelete(word.id)}>Удалить</button>
          </td>
        </>
      )}
    </tr>
  );
}

export default WordRow;
