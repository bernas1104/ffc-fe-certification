import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 10px;
  }

  h2 {
    margin-bottom: 20px;
  }
`;

export const Challenges = styled.div`
  display: flex;
  flex-direction: column;

  button,
  a {
    margin-bottom: 20px;
  }
`;
