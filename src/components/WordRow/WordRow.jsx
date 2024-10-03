import React, { useState } from "react";
import styles from "./WordRow.module.css";

function WordRow({
  word,
  showTranslation,
  toggleTranslation,
  onEdit,
  onDelete,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedWord, setEditedWord] = useState(word);
  const [errors, setErrors] = useState({});
  const [isSaving, setIsSaving] = useState(false);

  const validateFields = () => {
    let newErrors = {};
    if (!editedWord.russian) newErrors.russian = "Поле не может быть пустым";
    if (!editedWord.english) newErrors.english = "Поле не может быть пустым";
    if (!editedWord.transcription)
      newErrors.transcription = "Поле не может быть пустым";
    return newErrors;
  };

  const handleSave = async () => {
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsSaving(true);
      try {
        await onEdit(editedWord);
        setIsEditing(false);
      } catch (error) {
        console.error("Ошибка при сохранении:", error);
      } finally {
        setIsSaving(false);
      }
    }
  };

  return (
    <tr>
      {isEditing ? (
        <>
          <td>
            <input
              value={editedWord.russian}
              onChange={(e) =>
                setEditedWord({ ...editedWord, russian: e.target.value })
              }
              className={errors.russian ? styles.error : ""}
            />
            {errors.russian && (
              <span className={styles.errorText}>{errors.russian}</span>
            )}
          </td>
          <td>
            <input
              value={editedWord.english}
              onChange={(e) =>
                setEditedWord({ ...editedWord, english: e.target.value })
              }
              className={errors.english ? styles.error : ""}
            />
            {errors.english && (
              <span className={styles.errorText}>{errors.english}</span>
            )}
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
              className={errors.transcription ? styles.error : ""}
            />
            {errors.transcription && (
              <span className={styles.errorText}>{errors.transcription}</span>
            )}
          </td>
          <td>
            <button onClick={() => setIsEditing(false)}>Отмена</button>
            <button onClick={handleSave} disabled={isSaving}>
              {isSaving ? "Сохранение..." : "Сохранить"}
            </button>
          </td>
        </>
      ) : (
        <>
          <td>{word.russian}</td>
          <td>
            {showTranslation ? (
              word.english
            ) : (
              <button onClick={toggleTranslation}>Показать перевод</button>
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
