import React, { FormEvent } from 'react';
import { useAuth } from 'context/auth-context';
import { Button, Form } from 'antd';
import Input from 'antd/es/input';
import { LongButton } from 'unauthenticated-app';

export const LoginScreen = () => {
  const { login, user } = useAuth();

  const handleSubmit = (value: { username: string; password: string }) => {
    // event.preventDefault();
    // const username = (event.currentTarget.elements[0] as HTMLInputElement)
    //   .value;
    // const password = (event.currentTarget.elements[1] as HTMLInputElement)
    //   .value;
    // login({ username, password });
    login(value);
  };
  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={'username'}
        rules={[{ required: true, message: 'input username' }]}
      >
        {/* <label htmlFor="username">用户名</label> */}
        <Input placeholder={'username'} type="text" id={'username'}></Input>
      </Form.Item>
      <Form.Item
        name={'password'}
        rules={[{ required: true, message: 'input password' }]}
      >
        {/* <label htmlFor="password">密码</label> */}
        <Input placeholder={'password'} type="password" id={'password'}></Input>
      </Form.Item>
      <Form.Item>
        <LongButton htmlType={'submit'} type={'primary'}>
          登录
        </LongButton>
      </Form.Item>
    </Form>
  );
};
