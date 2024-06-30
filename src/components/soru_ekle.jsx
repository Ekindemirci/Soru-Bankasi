import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import './soru_ekle.css'; // Ensure you have your CSS for styling

const SoruEkle = () => {
  const [questions, setQuestions] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
  ]);

  const addQuestion = () => {
    if (questions.length < 9) {
      setQuestions([...questions, { id: questions.length + 1 }]);
    }
  };

  const removeQuestion = (id) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const rows = []; // Array to store rows of questions

  for (let i = 0; i < questions.length; i += 3) {
    rows.push(
      <div className="row" key={i}>
        {questions.slice(i, i + 3).map((question) => (
          <div className="question-card" key={question.id}>
            <div className="question-header">
              <h3>Soru {question.id}</h3>
              <Button onClick={() => removeQuestion(question.id)} type="link" icon={<DeleteOutlined />} />
            </div>
            <Form layout="vertical">
              <Form.Item label="Soru">
                <Input placeholder="Soru metni" />
              </Form.Item>
              <Form.Item label="Seçenek A">
                <Input placeholder="Seçenek A" />
              </Form.Item>
              <Form.Item label="Seçenek B">
                <Input placeholder="Seçenek B" />
              </Form.Item>
              <Form.Item label="Seçenek C">
                <Input placeholder="Seçenek C" />
              </Form.Item>
              <Form.Item label="Seçenek D">
                <Input placeholder="Seçenek D" />
              </Form.Item>
              <Form.Item label="Doğru Cevap">
                <Input placeholder="Doğru Cevap" />
              </Form.Item>
            </Form>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="soru-ekle">
      <div className="header">
        <Button type="primary" onClick={addQuestion} disabled={questions.length >= 9}>
          Sınav Ekle
        </Button>
      </div>
      <div className="question-container">
        {rows}
      </div>
    </div>
  );
};

export default SoruEkle;
