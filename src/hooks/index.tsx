import React from 'react';

import { Basic } from '../utils/propTypes/index';
import { FreeCodeCampProvider } from './freeCodeCampHook';

const AppProvider: React.FC = ({ children }) => {
  return <FreeCodeCampProvider>{children}</FreeCodeCampProvider>;
};

AppProvider.propTypes = { ...Basic };

export default AppProvider;
