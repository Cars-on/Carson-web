import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;

  max-width: 32rem;
  width: 100%;
  height: 6rem;
`;

export const Image = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 1.75rem;
`;

export const TextContent = styled.div`
  margin: 0 0 0 1rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-family: Big Shoulders Display;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--green-aqua);
`;

export const Strong = styled.strong`
  font-family: Big Shoulders Display;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--green-dark);
`;

export const Paragraph = styled.p`
  font-family: Archivo;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1rem;
  color: var(--green-dark);
`;
