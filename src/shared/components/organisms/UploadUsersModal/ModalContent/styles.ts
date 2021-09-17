import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;

  width: 100vw;
  height: 100vh;

  top: 0;

  background: #0000006e;
  backdrop-filter: blur(10px);
  z-index: 1;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  overflow: hidden;

  width: 100%;
  height: 100%;
  max-width: 65rem;
  max-height: 40rem;

  border-radius: 12px;

  background: #fff;

  .close {
    z-index: 2;

    position: absolute;
    top: 25px;
    right: 25px;

    font-size: 20px;
    color: #fff;
  }

  &:before {
    content: '';
    background: #4caf5045;
    width: 120%;
    height: 220px;
    z-index: 1;
    position: absolute;
    top: 0;
    border-radius: 0 0 50% 50%;

    background: linear-gradient(45deg, #0050038f, #00467d);
    background-size: 200% 200%;
    animation: colors 10s ease infinite;
  }

  @media (max-width: 800px) {
    max-width: none;
    max-height: none;
    border-radius: 0;
  }

  @keyframes colors {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }
`;

export const DivLoader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const Button = styled.button`
  width: 120px;
  height: 48px;

  background: #38bcac;
  border-radius: 32px;
  border: none;

  font-family: Archivo;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 20px;

  color: #ffffff;

  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5%);
  }
`;
