import React from 'react';
import { Typography } from 'antd';

const { Title, Text } = Typography;

const Sonuc = (props) => {
  const { correctCount, incorrectCount, score } = props.location.state;

  return (
    <div className="sonuc-container">
      <Title level={2}>Sonuçlar</Title>
      <div>
        <Text strong>Doğru Sayısı:</Text> <Text>{correctCount}</Text>
      </div>
      <div>
        <Text strong>Yanlış Sayısı:</Text> <Text>{incorrectCount}</Text>
      </div>
      <div>
        <Text strong>Puan:</Text> <Text>{score} / 100</Text>
      </div>
    </div>
  );
};

export default Sonuc;
