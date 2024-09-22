import React, { useState } from "react";
import styles from "./WordRow.module.css";

function WordRow({ word, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedWord, setEditedWord] = useState(word);
  const [errors, setErrors] = useState({});

  const validateFields = () => {
    let newErrors = {};
    if (!editedWord.name) newErrors.name = "Поле не может быть пустым";
    if (!editedWord.translate)
      newErrors.translate = "Поле не может быть пустым";
    if (!editedWord.transcription)
      newErrors.transcription = "Поле не может быть пустым";
    return newErrors;
  };

  const handleSave = () => {
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Показать ошибки
    } else {
      console.log("Сохранено:", editedWord); // Выводим параметры формы
      setIsEditing(false); // Выход из режима редактирования
      onEdit(editedWord); // Сохранение изменений
    }
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
              className={errors.name ? styles.error : ""}
            />
            {errors.name && (
              <span className={styles.errorText}>{errors.name}</span>
            )}
          </td>
          <td>
            <input
              value={editedWord.translate}
              onChange={(e) =>
                setEditedWord({ ...editedWord, translate: e.target.value })
              }
              className={errors.translate ? styles.error : ""}
            />
            {errors.translate && (
              <span className={styles.errorText}>{errors.translate}</span>
            )}
          </td>
          <td>
            <input
              value={editedWord.transcription}
              onChange={(e) =>
                setEditedWord({ ...editedWord, transcription: e.target.value })
              }
              className={errors.transcription ? styles.error : ""}
            />
            {errors.transcription && (
              <span className={styles.errorText}>{errors.transcription}</span>
            )}
          </td>
          <td>
            <button onClick={() => setIsEditing(false)}>Отмена</button>
            <button onClick={handleSave}>Сохранить</button>
          </td>
        </>
      ) : (
        <>
          <td>{word.name}</td>
          <td>{word.translate}</td>
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
