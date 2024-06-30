import React, { useContext } from 'react';
import { Button, Card, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ExamContext } from './ExamContext';

const { Title, Text } = Typography;

const Ogrenci = () => {
  const navigate = useNavigate();
  const { exams, updateExamCode } = useContext(ExamContext); 

  const startTest = (examCode) => {
    updateExamCode(examCode); 
    navigate('/quiz');
  };

  return (
    <div className="ogrenci-container">
      <Title level={2} style={{ color: '#1fb1d9' }}>Sınavlar</Title>
      {exams.map((exam) => (
        <Card key={exam.code} className="exam-card">
          <Text strong>{exam.code}</Text>
          <p><strong>Sınav Adı:</strong> {exam.name}</p>
          <p><strong>Puan:</strong> {exam.criteria}</p>
          <p><strong>Süre:</strong> {exam.timing}</p>
          <Button
            type="primary"
            style={{ backgroundColor: '#1fb1d9', borderColor: '#1fb1d9' }}
            onClick={() => startTest(exam.code)}
          >
            Teste Başla
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default Ogrenci;
