import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import history from './services/history';
import Routes from './routes';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyle />;
      <ToastContainer autoClose={3000} className="toast-container" />
    </Router>
  );
}

export default App;
