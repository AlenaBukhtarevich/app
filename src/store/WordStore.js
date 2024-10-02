import { makeAutoObservable } from "mobx";

class WordStore {
  words = [];
  loading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchWords() {
    this.loading = true;
    try {
      const response = await fetch(
        "http://itgirlschool.justmakeit.ru/api/words"
      );
      this.words = await response.json();
    } catch (error) {
      this.error = error;
    } finally {
      this.loading = false;
    }
  }

  addWord(word) {
    this.words.push(word);
  }

  updateWord(updatedWord) {
    this.words = this.words.map((word) =>
      word.id === updatedWord.id ? updatedWord : word
    );
  }

  deleteWord(id) {
    this.words = this.words.filter((word) => word.id !== id);
  }
}

const wordStore = new WordStore();
export default wordStore;
