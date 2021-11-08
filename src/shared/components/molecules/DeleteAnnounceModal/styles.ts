import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #0000006e;
  backdrop-filter: blur(10px);

  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  min-height: 100vh;

  z-index: 6;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: absolute;
  top: 25vh;

  gap: 30px;

  width: 500px;
  height: max-content;
  padding: 30px;
  background: #fff;
  z-index: 999;
  border-radius: 12px;

  .delete-icon {
    position: absolute;
    right: 25px;
    top: 25px;
    font-size: 25px;

    cursor: pointer;
  }

  h1 {
    color: var(--green-aqua);
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }

  button {
    border: none;
    border-radius: 8px;
    padding: 10px 15px;

    font-family: 'Archivo', sans-serif;

    & + button {
      margin-left: 20px;
    }

    &.delete {
      background: var(--red);
      color: white;

      transition: 0.3s all;

      &:hover {
        color: var(--red);
        background: white;
      }
    }

    &.cancel {
      transition: 0.3s all;

      &:hover {
        color: var(--green-aqua);
        background: white;
      }
    }
  }
`;
export const ModalOptions = styled.div`
  display: flex;
`;
