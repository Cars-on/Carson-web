import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 97.5%;
  padding: 1.5rem 2rem;

  background: white;
  border-radius: 2rem;
  filter: drop-shadow(-5px 5px 5px rgba(0, 0, 0, 0.25));

  position: absolute;
  z-index: 1;

  @media (max-width: 1216px) {
    width: 95%;
  }
`;

export const CarInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 0 1rem 0;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CarName = styled.h1`
  font-family: Big Shoulders Display;
  font-style: normal;
  font-weight: bold;
  font-size: 2.25rem;

  display: flex;
  align-items: center;

  color: #38bcac;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Price = styled.h2`
  display: flex;
  align-items: center;
  margin: 0 2rem 0 0;

  font-family: Big Shoulders Display;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
`;

export const LittleIcon = styled.img`
  margin: 0 1rem 0 0;
  height: 1.25rem;
`;

export const LiContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const UserNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const UserName = styled.h3`
  margin: 0 0 0.5rem 0;

  font-family: Archivo;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 1.625rem;

  color: #0b2926;
`;

export const Icon = styled.img`
  margin: 0 1rem 0 0;
  height: 3rem;
`;

export const Paragraph = styled.p`
  display: flex;
  align-items: center;

  font-family: Archivo;
  font-style: normal;
  font-size: 1rem;
  line-height: 1rem;

  color: #0b2926;

  &:last-child {
    margin: 0.25rem 0 0 0;
  }
`;

export const PhoneParagraph = styled.p`
  display: flex;
  align-items: center;

  font-family: Archivo;
  font-style: normal;
  font-size: 1rem;
  line-height: 1rem;

  color: #0b2926;
`;

export const WarningParagraph = styled.p`
  max-width: 15rem;

  font-family: Archivo;
  font-style: normal;
  font-size: 1rem;
  line-height: 1rem;

  color: #0b2926;
`;

export const WarningContainer = styled.div`
  display: flex;
  align-items: center;
`;
