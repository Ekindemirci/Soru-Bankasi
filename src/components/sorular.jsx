import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, Card, Spin, Radio } from 'antd';
import { useLocation } from 'react-router-dom';
import './sorular.css';

const Sorular = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const examCode = query.get('examCode');

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`https://v1.nocodeapi.com/ozlemekina/google_sheets/sqzLbOYIiyMAZqhk?tabId=${examCode}`);
        setQuestions(response.data.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [examCode]);

  const handleOptionChange = (questionId, option) => {
    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [questionId]: option,
    }));
  };

  if (loading) {
    return <Spin size="large" />;
  }

  return (
    <div className='question-container'>
      <List
        dataSource={questions}
        renderItem={(question) => (
          <List.Item>
            <Card title={question.question_text} className="question-card">
              <Radio.Group
                onChange={(e) => handleOptionChange(question.id, e.target.value)}
                value={selectedAnswers[question.id]}
                className="radio-group"
              >
                <Radio className="radio-option" value="A">{question.option_a}</Radio>
                <Radio className="radio-option" value="B">{question.option_b}</Radio>
                <Radio className="radio-option" value="C">{question.option_c}</Radio>
                <Radio className="radio-option" value="D">{question.option_d}</Radio>
              </Radio.Group>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Sorular;



