import React, { useEffect } from 'react';

import { useFreeCodeCamp } from '../../hooks/freeCodeCampHook';

const RandomQuoteMachine: React.FC = () => {
  const { addTestBundle } = useFreeCodeCamp();

  useEffect(() => addTestBundle(), [addTestBundle]);

  return <p>RandomQuoteMachine works!</p>;
};

export default RandomQuoteMachine;
