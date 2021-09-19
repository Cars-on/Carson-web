import { useMemo } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #fafafa;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;

  .content {
    margin-top: 10rem;
    background: #fff;
    padding: 2rem;
    border-radius: 2rem;
  }

  .drag-and-drop {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    aside {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      margin: 2rem 0;
    }

    .section-title {
      margin-bottom: 2rem;

      div > div {
        height: 800px !important;
      }

      h1 {
        font-family: 'Big Shoulders Display';
        font-weight: bold;
        font-size: 2rem;
        color: #38bcac;
      }

      p {
        font-family: Archivo;
        font-size: 1rem;
        color: #0b2926;
      }
    }

    .files-ready {
      margin-top: 2rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      h4 {
        font-family: Archivo;
        font-size: 1rem;
        color: #0b2926;
      }
      ul {
        display: inline;
        list-style-type: none;
        text-align: center;
        font-family: Archivo;
        font-size: 1rem;
        color: #38bcac;
      }
    }
  }

  @media (max-width: 640px) {
    div {
      width: 100% !important;
    }
  }
`;

export const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  border: '1px dashed #A4B3B5',
  borderWidth: 2,
  borderRadius: '1rem',
  borderColor: '#eeeeee',
  backgroundColor: 'rgba(56, 188, 172, 0.05)',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
  width: '40rem',
  minHeight: '12rem',
  cursor: 'pointer',
};

export const activeStyle = {
  borderColor: '#A4B3B5;',
};

export const acceptStyle = {
  borderColor: '#38bcac',
};

export const rejectStyle = {
  borderColor: '#ff1744',
};
