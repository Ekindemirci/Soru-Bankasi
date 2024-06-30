import React from 'react';
import { Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import './homepage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = (examCode) => {
    navigate(`/sorular?examCode=${examCode}`);
  };

  return (
    <div className='form'>
      <div id='form-container'>
        <div className='button-group'>
          <Input className='duration-input' type='number' placeholder='Süre' />
          <Button onClick={() => handleClick('sayfa1')}>Flutter</Button>
        </div>
        <div className='button-group'>
          <Input className='duration-input' type='number' placeholder='Süre' />
          <Button onClick={() => handleClick('sayfa2')}>Programlama Dillerine</Button>
        </div>
        <div className='button-group'>
          <Input className='duration-input' type='number' placeholder='Süre' />
          <Button onClick={() => handleClick('sayfa3')}>İşletim Sistemleri</Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
