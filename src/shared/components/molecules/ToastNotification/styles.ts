import styled from 'styled-components';

import { appearFromRight } from '@/shared/styles/animations';

interface IContainerProps {
  visible: boolean;
}

export const Container = styled.div`
  top: 6rem;
  right: 1rem;
  z-index: 20;
  position: fixed;
  background: #fff;
  max-height: 150px;
  margin-left: 1rem;
  border-radius: 13px;
  justify-content: center;
  animation: ${appearFromRight} 0.8s;
  box-shadow: var(--container-shadow);
  display: ${(props: IContainerProps) => (props.visible ? 'flex' : 'none')};

  .text-modal-content-container {
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: row-reverse;
    padding: 1rem 1.8rem 1.5rem;
    gap: 20px;

    animation: ${appearFromRight} 1s;

    svg {
      cursor: pointer;
      margin: -5px 0px 0px 0;
      zoom: 80%;
      filter: drop-shadow(1px 1px 15px rgba(0, 0, 0, 0.6));
    }

    .text-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h3 {
        margin: 0;
        font-weight: 600;
        font-size: 1.1rem;
        margin-bottom: 0.9rem;
        text-transform: uppercase;
        font-family: 'Archivo ', sans-serif;
      }

      p {
        margin: 0;
        font-size: 1rem;
      }
    }
  }
`;
