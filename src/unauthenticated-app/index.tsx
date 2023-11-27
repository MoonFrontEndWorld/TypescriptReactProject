import { Card } from 'antd';
import React, { useState } from 'react';
import { LoginScreen } from './login';
import { RegisterScreen } from './register';
import styled from '@emotion/styled';
import logo from 'assets/logo.svg';
import left from 'assets/left.svg';
import right from 'assets/right.svg';
const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <>
      {' '}
      <Container>
        <Header />
        <ShadowCard>
          {isRegister ? <RegisterScreen /> : <LoginScreen />}
          <a onClick={() => setIsRegister(!isRegister)}>
            切换到{isRegister ? '登录' : '注册'}
          </a>
        </ShadowCard>
      </Container>
    </>
  );
};

const Header = styled.header`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;

const ShadowCard = styled(Card)`
width:48rem;
min-height:56rem;
padding 3.2rem;
border-radius:8.3rem;
box-sizing:border-box;
box-shadow:rgba(0,0,0,0.1) 0 0 10px;
text-align:center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export default UnauthenticatedApp;
