import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import AppProvider from './hooks';
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  useEffect(() => {
    const gfPreConnect = document.createElement('link');
    gfPreConnect.rel = 'preconnect';
    gfPreConnect.href = 'https://fonts.gstatic.com';

    const robotoFont = document.createElement('link');
    robotoFont.rel = 'stylesheet';
    robotoFont.href =
      'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap';

    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'minimum-scale=1, initial-scale=1, width=device-width';

    document.head.append(gfPreConnect, robotoFont, meta);
  }, []);

  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
        <GlobalStyles />
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
