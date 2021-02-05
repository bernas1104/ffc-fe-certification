import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, Challenges } from './styles';
import { useFreeCodeCamp } from '../../hooks/freeCodeCampHook';

const Home: React.FC = () => {
  const { removeTestBundle } = useFreeCodeCamp();

  useEffect(() => {
    removeTestBundle();
  }, [removeTestBundle]);

  return (
    <Container>
      <h1>freeCodeCamp</h1>
      <h2>Front-End Challenges</h2>

      <Challenges>
        <Link to="random-quote-machine">Random Quote Machine</Link>
        <button type="button">Markdown Previewer</button>
        <button type="button">Drum Machine</button>
        <button type="button">JavaScript Calculator</button>
        <button type="button">25 + 5 Clock</button>
      </Challenges>
    </Container>
  );
};

export default Home;
