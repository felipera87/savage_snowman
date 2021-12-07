import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  background: ${props => (props.isSimpleFooter ? 'none' : '#000')};
  padding: 10px 30px;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: ${props =>
    props.isSimpleFooter ? 'flex-start' : 'space-between'}; ;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  & > a {
    margin-right: 10px;
    & > img {
      width: 40px;
      height: 40px;
    }
  }
`;

export const Navigator = styled.div`
  display: flex;

  & > button,
  a {
    width: auto;
    margin-left: 20px;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: center;

  & > img {
    width: 200px;
  }
`;
