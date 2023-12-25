import { Button, Form, Input } from 'antd';
import { useAuth } from 'context/auth-context';
import React, { FormEvent } from 'react';
import { LongButton } from 'unauthenticated-app';
export const RegisterScreen = () => {
  const { register, user } = useAuth();

  const handleSubmit = (value: { username: string; password: string }) => {
    // event.preventDefault();
    // const username = (event.currentTarget.elements[0] as HTMLInputElement)
    //   .value;
    // const password = (event.currentTarget.elements[1] as HTMLInputElement)
    //   .value;
    // login({ username, password });
    register(value);
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
          注册
        </LongButton>
      </Form.Item>
    </Form>
  );
};
