import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';

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
        <Button variant="outlined" color="primary" href="/random-quote-machine">
          Random Quote Machine
        </Button>
        <Button variant="outlined" color="primary" href="#" type="button">
          Markdown Previewer
        </Button>
        <Button variant="outlined" color="primary" href="#" type="button">
          Drum Machine
        </Button>
        <Button variant="outlined" color="primary" href="#" type="button">
          JavaScript Calculator
        </Button>
        <Button variant="outlined" color="primary" href="#" type="button">
          25 + 5 Clock
        </Button>
      </Challenges>
    </Container>
  );
};

export default Home;
