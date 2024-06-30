import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/register';
import HomePage from './components/homepage';
import SoruEkle from './components/soru_ekle';
import TestCoz from './components/test_coz';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<HomePage/>} />
        <Route path="/soruekle" element={<SoruEkle/>} />
        <Route path="/testcoz" element={<TestCoz/>} />
      </Routes>
    </Router>
  );
};

export default App;



