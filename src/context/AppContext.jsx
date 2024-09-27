import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWords();
  }, []);

  const fetchWords = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://itgirlschool.justmakeit.ru/api/words"
      );
      if (!response.ok) throw new Error("Ошибка при загрузке слов");
      const data = await response.json();
      setWords(data);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateWord = async (updatedWord) => {
    try {
      const response = await fetch(
        `http://itgirlschool.justmakeit.ru/api/words/${updatedWord.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedWord),
        }
      );

      if (!response.ok) {
        throw new Error("Ошибка обновления на сервере");
      }

      const updatedWords = words.map((word) =>
        word.id === updatedWord.id ? updatedWord : word
      );
      setWords(updatedWords);
    } catch (error) {
      console.error("Ошибка при обновлении слова:", error);
    }
  };

  const deleteWord = async (id) => {
    try {
      await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}`, {
        method: "DELETE",
      });
      fetchWords(); // обновляем список после удаления
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <AppContext.Provider
      value={{ words, loading, error, updateWord, deleteWord }}
    >
      {children}
    </AppContext.Provider>
  );
};
