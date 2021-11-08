import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 1.1rem;

  textarea {
    border: none;
    padding: 10px;

    width: 100%;

    border-radius: 8px;

    font-size: 1rem;
    font-family: Archivo;
  }

  textarea {
    resize: none;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: #f7f7f7;
    }

    &::-webkit-scrollbar-thumb {
      background: #eee;
    }
  }

  .options {
    button {
      font-family: Archivo;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 700;

      cursor: pointer;
      border: none;
      width: 10rem;
      height: 3rem;
      box-sizing: border-box;
      border-radius: 2rem;

      & + button {
        margin-left: 20px;
      }

      &.confirm {
        background: var(--green-aqua);
        color: white;

        transition: 0.3s all;

        &:hover {
          color: var(--green-aqua);
          background: white;
        }
      }

      &.cancel {
        transition: 0.3s all;

        &:hover {
          color: var(--red);
          background: white;
        }
      }
    }
  }
`;

export const InputSection = styled.section`
  display: flex;
  align-items: center;

  border-radius: 8px;
  background: #fff;
  padding: 10px;

  input {
    border: none;
    padding: 0 10px;
    width: 100%;
  }

  label {
    font-size: 1rem;
    font-family: Archivo;

    width: 100%;
    max-width: max-content;
  }
`;
