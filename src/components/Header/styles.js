import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  background: none;

  display: flex;
  justify-content: space-between;

  padding: 10px;

  & > img {
    width: 500px;
  }

  & > div {
    display: flex;

    & > button {
      width: auto;
      margin-left: 30px;
    }
  }
`;
