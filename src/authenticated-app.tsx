import React from 'react';
// import { ProjectListScreen } from 'screens/project-list';
import { useAuth } from 'context/auth-context';

const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <button onClick={logout}>登出</button>
      登录成功
    </div>
  );
};

export default AuthenticatedApp;