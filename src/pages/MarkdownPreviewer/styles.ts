import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  padding: 40px;
`;

export const EditorContainer = styled.div`
  flex: 1;
  height: 100%;
  margin: 20px;

  textarea {
    width: 100%;
    height: 100%;
    resize: none;
    font-size: 14px;
  }
`;

export const PreviewContainer = styled.div`
  flex: 1;
  height: 100%;
  margin: 20px;
  overflow-y: scroll;

  * {
    margin: 15px 0;
  }

  blockquote {
    border-left: 3px solid #224b4b;
    color: #224b4b;
    padding-left: 5px;
    margin-left: 25px;
  }

  code {
    background: white;
    padding: 1px 4px 2px 4px;
    font-size: 12px;
    font-weight: bold;
  }

  pre {
    background: white;
    padding: 5px 0 5px 5px;
  }

  h1 {
    border-bottom: 2px solid black;
  }

  h2 {
    border-bottom: 1px solid black;
  }

  table {
    border-collapse: collapse;
  }

  td,
  th {
    border: 2px solid black;
    padding-left: 5px;
    padding-right: 5px;
  }

  ul,
  ol {
    padding-inline-start: 40px;
  }
`;
