import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  section {
    display: flex;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    position: absolute;
    list-style: none;
    border: 1px solid #ededed;

    width: 100%;
    top: 50px;
    gap: 1rem;
    margin: 1rem 0;
    padding: 1rem 0;

    background: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px 5px #90909012;

    li {
      display: flex;
      justify-content: center;
      cursor: pointer;

      font-family: Archivo;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      color: #0b2926;

      line-height: 1rem;
      margin: 0;
      letter-spacing: 0em;

      transition: all ease-in-out 0.3s;

      &:hover {
        color: var(--green-aqua);
        transform: scale(1.1);
      }
    }
  }
`;

export const RemoveFilterX = styled.button`
  font-size: 1.125rem;
  color: #0b2926;

  display: flex;
  position: absolute;
  top: 12px;
  z-index: 2;
  right: 12px;
  background: none;
  border: none;
  color: var(--green-aqua);
`;

export const SelectModelButton = styled.button`
  display: grid;
  grid-template-columns: 0.3fr 2.5fr 0.3fr;
  width: 100%;

  font-family: Archivo;
  font-size: 1.125rem;
  color: #0b2926;
  border-radius: 20px;
  border: 1px solid #ededed;
  transform: scale(1);

  background: #fff;
  border: none;
  padding: 12px 24px;
  width: 100%;

  transition: all ease-in-out 0.6s;

  box-shadow: 0 0 10px 5px #90909012;

  &:focus,
  &:hover {
    color: var(--green-aqua);
    transform: scale(1.05);
  }
`;
