import AuthenticatedApp from 'authenticated-app';
import { useAuth } from 'context/auth-context';
import React from 'react';

import UnauthenticatedApp from 'unauthenticated-app';
// import 'antd/dist/antd.less';
import { ProjectListScreen } from 'screens/project-list';
// import { TsReactTest } from './Practice/try-use-arry';
function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      {/* <ProjectListScreen /> */}
    </div>
  );
}

export default App;
