import styled from 'styled-components';

interface IMessageContainerProps {
  isReceivedMessage: boolean;
}

export const Container = styled.div<IMessageContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: ${props =>
    props.isReceivedMessage ? 'flex-start' : 'flex-end'};

  width: 100%;
  padding: 1rem 0 0 0;
`;

export const Content = styled.div`
  max-width: 50rem;
  padding: 1rem;

  background: #ffffff;
  border-radius: 2rem;
  filter: drop-shadow(-1.5px 1.5px 2px rgba(0, 0, 0, 0.25));

  @media (max-width: 1216px) {
    max-width: 35rem;
  }
`;

export const Paragraph = styled.span`
  display: flex;

  overflow-wrap: break-word;
  word-break: break-word;
  white-space: pre-wrap;

  font-family: Archivo;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
`;
