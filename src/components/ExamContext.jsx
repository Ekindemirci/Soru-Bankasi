import React, { createContext, useState } from 'react';

const ExamContext = createContext();

const ExamProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [exams, setExams] = useState([
    {
      code: 'FLT101',
      name: 'Flutter',
      criteria: 100,
      timing: '90 dk',
    },
    {
      code: 'BIL202',
      name: 'Bilgisayar Mühendisliğine Giriş',
      criteria: 80,
      timing: '60 dk',
    },
   
  ]);
  const [examCode, setExamCode] = useState(''); 

  const addExam = (exam) => {
    setExams([...exams, exam]);
  };

  const addQuestions = (newQuestions) => {
    setQuestions(newQuestions);
  };

  const updateExamCode = (code) => {
    setExamCode(code); 
  };

  return (
    <ExamContext.Provider value={{ questions, addQuestions, exams, addExam, examCode, updateExamCode }}>
      {children}
    </ExamContext.Provider>
  );
};

export { ExamProvider, ExamContext };
