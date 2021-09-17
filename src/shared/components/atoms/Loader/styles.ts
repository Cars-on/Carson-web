import styled from 'styled-components';

export const Container = styled.div`
  .dotsLoad {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40%;
  }

  .loads {
    width: 100vw;
    height: 100vh;
  }

  .dot {
    background-color: #009688;
    border-radius: 50%;
    height: 15px;
    width: 15px;

    margin: 10px;

    animation: move ease-in-out 1.5s infinite;
  }

  .dot:nth-child(1) {
    animation-delay: -0.4s;
  }

  .dot:nth-child(2) {
    animation-delay: -0.2s;
  }

  @keyframes move {
    0% {
      transform: translateY(-100%);
    }

    50% {
      transform: translateY(100%);
    }

    100% {
      transform: translateY(-100%);
    }
  }
`;
