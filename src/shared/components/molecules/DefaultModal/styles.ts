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

export const ModalContent = styled.div`
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
`;
