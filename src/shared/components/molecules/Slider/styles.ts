import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  max-width: 1380px;

  .alice-carousel__wrapper {
    padding: 20px 0;
  }

  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    top: 0%;
    padding: 0;
    width: 54px;
    height: 100%;
    opacity: 0;
    display: flex;
    position: absolute;
    align-items: center;

    transition: opacity 0.3s ease-in-out;

    button {
      border: none;

      border-radius: 50%;
      background: var(--green-aqua);
    }
  }

  .alice-carousel__prev-btn {
    left: 0;
    text-align: center;

    button {
      padding: 6px 8px 5px 6px;
    }
  }

  .alice-carousel__next-btn {
    right: 0;
    text-align: center;

    button {
      padding: 6px 6px 5px 8px;
    }
  }

  .alice-carousel__dots-item:not(.__custom):hover,
  .alice-carousel__dots-item:not(.__custom).__active {
    background: var(--green-aqua);
  }

  &:hover {
    .alice-carousel__prev-btn,
    .alice-carousel__next-btn {
      opacity: 1;
    }
  }
`;
