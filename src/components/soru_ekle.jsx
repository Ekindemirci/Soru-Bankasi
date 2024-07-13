<<<<<<< HEAD
import React, { useContext, useState } from 'react';
import { Form, Input, Button, Select, InputNumber } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { ExamContext } from './ExamContext';
import './soru_ekle.css';

const { Option } = Select;

const SoruEkle = () => {
  const [questions, setQuestions] = useState([...Array(10).keys()].map(i => ({ id: i + 1, score: 10 })));
  const { addQuestions, addExam } = useContext(ExamContext);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [duration, setDuration] = useState(90); 
  const [totalScore, setTotalScore] = useState(100); 
=======
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
>>>>>>> 34c54ff1c018cafedd6cd138d8cef1650dac4756

  const removeQuestion = (id) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

<<<<<<< HEAD
  const handleFinish = (values) => {
    addQuestions(values.questions);
    addExam({
      code: 'NEW101',
      name: 'Yeni Sınav',
      description: 'Yeni Eklenen Sınav',
      criteria: totalScore,
      timing: `${duration} dk`, 
    });
    navigate('/ogrenci');
  };

  const handleDurationChange = (value) => {
    setDuration(value);
  };

  const handleScoreChange = (id, value) => {
    const updatedQuestions = questions.map(q =>
      q.id === id ? { ...q, score: value } : q
    );
    setQuestions(updatedQuestions);
    const newTotalScore = updatedQuestions.reduce((total, q) => total + q.score, 0);
    setTotalScore(newTotalScore);
  };

  const rows = [];
=======
  const rows = []; // Array to store rows of questions
>>>>>>> 34c54ff1c018cafedd6cd138d8cef1650dac4756

  for (let i = 0; i < questions.length; i += 3) {
    rows.push(
      <div className="row" key={i}>
<<<<<<< HEAD
        {questions.slice(i, i + 3).map((question, index) => (
          <div className="question-card" key={question.id}>
            <div className="question-header">
              <h3>Soru {question.id}</h3>
              {questions.length > 1 && (
                <Button onClick={() => removeQuestion(question.id)} type="link" icon={<DeleteOutlined />} />
              )}
            </div>
            <Form.Item
              name={['questions', index, 'text']}
              label="Soru"
              rules={[{ required: true, message: 'Lütfen soruyu giriniz' }]}
            >
              <Input placeholder="Soru metni" />
            </Form.Item>
            <Form.Item
              name={['questions', index, 'optionA']}
              label="Seçenek A"
              rules={[{ required: true, message: 'Lütfen Seçenek A\'yı giriniz' }]}
            >
              <Input placeholder="Seçenek A" />
            </Form.Item>
            <Form.Item
              name={['questions', index, 'optionB']}
              label="Seçenek B"
              rules={[{ required: true, message: 'Lütfen Seçenek B\'yi giriniz' }]}
            >
              <Input placeholder="Seçenek B" />
            </Form.Item>
            <Form.Item
              name={['questions', index, 'optionC']}
              label="Seçenek C"
              rules={[{ required: true, message: 'Lütfen Seçenek C\'yi giriniz' }]}
            >
              <Input placeholder="Seçenek C" />
            </Form.Item>
            <Form.Item
              name={['questions', index, 'optionD']}
              label="Seçenek D"
              rules={[{ required: true, message: 'Lütfen Seçenek D\'yi giriniz' }]}
            >
              <Input placeholder="Seçenek D" />
            </Form.Item>
            <Form.Item
              name={['questions', index, 'answer']}
              label="Doğru Cevap"
              rules={[{ required: true, message: 'Lütfen doğru cevabı giriniz' }]}
            >
              <Input placeholder="Doğru Cevap" />
            </Form.Item>
            <Form.Item
              name={['questions', index, 'score']}
              label="Soru Puanı"
              rules={[{ required: true, message: 'Lütfen soru puanını giriniz' }]}
            >
              <InputNumber defaultValue={question.score} onChange={value => handleScoreChange(question.id, value)} />
            </Form.Item>
=======
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
>>>>>>> 34c54ff1c018cafedd6cd138d8cef1650dac4756
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="soru-ekle">
<<<<<<< HEAD
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <div className="question-container">
          {rows}
        </div>
        <Form.Item label="Toplam Sınav Puanı" style={{ marginBottom: 16 }}>
          <InputNumber  value={totalScore} />
        </Form.Item>
        <Form.Item label="Sınav Süresi" style={{ marginBottom: 16 }}>
          <Select defaultValue={duration} onChange={handleDurationChange} style={{ width: 120 }}>
            <Option value={60}>1 saat</Option>
            <Option value={90}>1 saat 30 dakika</Option>
            <Option value={120}>2 saat</Option>
          </Select>
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Sınavı Kaydet ve Devam Et
        </Button>
      </Form>
=======
      <div className="header">
        <Button type="primary" onClick={addQuestion} disabled={questions.length >= 9}>
          Sınav Ekle
        </Button>
      </div>
      <div className="question-container">
        {rows}
      </div>
>>>>>>> 34c54ff1c018cafedd6cd138d8cef1650dac4756
    </div>
  );
};

export default SoruEkle;
