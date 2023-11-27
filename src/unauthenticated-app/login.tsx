import React, { FormEvent } from 'react';
import { useAuth } from 'context/auth-context';
import { Form } from 'antd';
import Input from 'antd/es/input';

export const LoginScreen = () => {
  const { login } = useAuth();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    login({ username, password });
  };
  return (
    <Form onFinish={handleSubmit}>
      <Form.Item>
        <label htmlFor="username">用户名</label>
        <Input type="text" id={'username'}></Input>
      </Form.Item>
      <Form.Item>
        <label htmlFor="password">密码</label>
        <input type="password" id={'password'}></input>
      </Form.Item>
      <button type="submit">登录</button>
    </Form>
  );
};
