import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Select } from 'antd';
import './register.css';
import users from './users';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    setLoading(true);
    try {


      const newUser = {
        username: values.username,
        password: values.password,
        email: values.email,
        role: values.role
      };


      
      users.push(newUser);

      navigate('/');
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='app'>
      <div className='container'>
        <h2>Kayıt Ol</h2>
        <Form name="register" onFinish={onFinish}>
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
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Lütfen e-posta adresinizi girin!' }, { type: 'email', message: 'Geçerli bir e-posta adresi girin!' }]}
          >
            <Input placeholder="E-posta" />
          </Form.Item>
          <Form.Item
            name="role"
            rules={[{ required: true, message: 'Lütfen bir rol seçin!' }]}
          >
            <Select
              placeholder='Rol Seçin'
              style={{ width: 120 }}
              allowClear
              options={[
                {
                  value: 'ogretmen',
                  label: 'Öğretmen',
                },
                {
                  value: 'ogrenci',
                  label: 'Öğrenci',
                },
              ]}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Kaydet
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
