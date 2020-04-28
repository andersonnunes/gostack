import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Header from './components/Header';

import Routes from './routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          />
        </Helmet>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}

export default App;
