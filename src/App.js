
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ExamProvider } from './components/ExamContext'; 
import Login from './components/Login';
import Register from './components/register';
import HomePage from './components/homepage';
import SoruEkle from './components/soru_ekle';
import Ogrenci from './components/ogrenci';
import Quiz from './components/Quiz'; 

const App = () => {
  return (
    <ExamProvider> {}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/soruekle" element={<SoruEkle />} />
          <Route path="/ogrenci" element={<Ogrenci />} />
          <Route path="/quiz" element={<Quiz />} /> {}
        </Routes>
      </Router>
    </ExamProvider>
  );
};

export default App;
