import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import WordTablePage from "./pages/WordTablePage";
import WordGamePage from "./pages/WordGamePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<WordTablePage />} />
          <Route path="/game" element={<WordGamePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
