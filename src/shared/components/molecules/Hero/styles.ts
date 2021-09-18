import styled from 'styled-components';

import manDriving from '@/shared/assets/people/man-driving.png';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  height: 400px;
  width: 100vw;

  margin-top: -40px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  background-image: url(${manDriving});
  background-repeat: no-repeat;
  background-size: cover;

  h1,
  p {
    font-style: normal;
    text-align: center;
    color: #ffffff;
    text-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-family: Big Shoulders Display;
    font-weight: 900;
    font-size: 3.5rem;
    line-height: 4.188rem;
  }

  p {
    font-family: Archivo;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.625rem;
  }
`;
