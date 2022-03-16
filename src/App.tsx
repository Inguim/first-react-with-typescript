import React from 'react';
import { AuthProvider } from './contexts/auth';
import RoutesElements from './routes';
import GlobalStyle from './styles/global'

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <RoutesElements />
    </AuthProvider>
  );
}

export default App;
