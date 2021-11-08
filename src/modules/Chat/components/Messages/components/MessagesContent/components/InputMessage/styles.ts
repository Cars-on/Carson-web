import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  margin: 1rem 0 0 0;
`;

export const TextareaContainer = styled.div`
  max-width: 100%;
  width: 100%;

  margin: 0 1rem 0 0;
  padding: 1rem;

  background: #ffffff;
  border-radius: 2rem;
`;

export const Textarea = styled.textarea`
  width: 100%;
  resize: unset;

  border: none;
  background: #ffffff;

  overflow-wrap: break-word;
  word-break: break-word;
  white-space: pre-wrap;

  font-family: Archivo;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
`;

export const SendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.703rem;

  border: none;
  background: white;
  border-radius: 100%;
`;

export const Icon = styled.img`
  height: 1.75rem;
`;
