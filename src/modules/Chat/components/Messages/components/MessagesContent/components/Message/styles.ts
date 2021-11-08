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
  max-width: 42rem;

  background: #ffffff;
  border-radius: 2rem;
  filter: drop-shadow(-1.5px 1.5px 2px rgba(0, 0, 0, 0.25));
`;

export const Paragraph = styled.p`
  display: flex;
  height: max-content;
  white-space: break-spaces;
  max-width: 40rem;
  padding: 1rem;

  font-family: Archivo;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;

  white-space: initial;
  overflow: hidden;
`;
