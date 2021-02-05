import React, { createContext, useContext, useCallback } from 'react';

import { Basic } from '../utils/propTypes/index';

interface FreeCodeCampState {
  addTestBundle(): void;
  removeTestBundle(): void;
}

const FreeCodeCampContext = createContext<FreeCodeCampState>(
  {} as FreeCodeCampState,
);

export const FreeCodeCampProvider: React.FC = ({ children }) => {
  const addTestBundle = useCallback(() => {
    const script = document.createElement('script');

    script.id = 'freeCodeCamp';
    script.setAttribute(
      'src',
      'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js',
    );

    document.body.appendChild(script);
  }, []);

  const removeTestBundle = useCallback(() => {
    document.getElementById('freeCodeCamp')?.remove();
    document.getElementById('fcc_test_suite_wrapper')?.remove();
  }, []);

  return (
    <FreeCodeCampContext.Provider value={{ addTestBundle, removeTestBundle }}>
      {children}
    </FreeCodeCampContext.Provider>
  );
};

export function useFreeCodeCamp(): FreeCodeCampState {
  const context = useContext(FreeCodeCampContext);

  if (!context) {
    throw new Error(
      'useFreeCodeCamp must be used with an FreeCodeCampProvider',
    );
  }

  return context;
}

FreeCodeCampProvider.propTypes = { ...Basic };
