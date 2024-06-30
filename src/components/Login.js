import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkbox, message } from 'antd';
import './Login.css';
import users from './users'; 

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const onFinish = (values) => {
    setLoading(true);
    const user = users.find(
      (u) => u.username === values.username && u.password === values.password
    );
    console.log(user)

    if (user) {
      console.log('Login successful');
      if(user.role === 'ogretmen') {
        navigate('/soruekle');
      } else if(user.role === 'ogrenci') {
        navigate('/ogrenci');
      }
    } else {
      error();
      console.error('Login failed: Invalid username or password');
      setLoading(false);
    }
  };

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Hata!',
    });
  };

  return (
    <div className='app'>
      {contextHolder}
      <div className='container'>
        <h2>Giriş Yap</h2>
        <Form name="login" initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Lütfen kullanıcı adınızı girin!' }]}
          >
            <Input placeholder="Kullanıcı Adı" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Lütfen şifrenizi girin!' }]}
          >
            <Input.Password placeholder="Şifre" />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Beni Hatırla</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Giriş Yap
            </Button>
          </Form.Item>
        </Form>
        <Button type="primary" onClick={() => navigate('/register')}>
          Kayıt Ol
        </Button>
      </div>
    </div>
  );
};

export default Login;
