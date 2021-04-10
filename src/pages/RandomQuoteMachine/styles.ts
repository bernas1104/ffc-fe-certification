import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

export const QuoteBox = styled.div`
  padding: 40px;
  width: 700px;
  height: auto;
  border-radius: 6px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  justify-content: center;

  .quote {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    margin: 20px auto;

    span {
      font-size: 28px;
      margin-left: 20px;
    }
  }

  .author {
    margin-top: 20px;
    align-self: flex-end;
  }

  .actions {
    margin-top: auto;
    display: flex;
    flex-direction: row;
    align-items: center;

    button,
    a {
      flex: 1;
      margin: 20px 0;
    }

    button:first-child {
      margin-right: 10px;
    }

    a:last-child {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-left: 10px;
    }
  }
`;
