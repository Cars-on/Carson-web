import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;

  width: 100%;
  height: 6rem;

  background: white;
  border-radius: 2rem;
  filter: drop-shadow(-5px 5px 10px rgba(0, 0, 0, 0.25));
`;

export const Image = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
`;

export const TextContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  max-width: 85%;
  margin: 0 0 0 1rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin: 0 0 1rem 0;
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

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
