import styled from 'styled-components';

import landingPageBackgroundImage from '../../assets/landing_page_background.png';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: url(${landingPageBackgroundImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;

  width: 100%;
  padding: 90px 10px 10px;

  #mint-snowmen-button-container {
    width: auto;
    position: absolute;
    bottom: 13%;
    right: 15%;

    & > a {
      button {
        font-size: 40px;
      }
    }
  }
`;

export const SideNavigator = styled.div`
  display: flex;
  flex-direction: column;

  width: auto;

  button {
    font-size: 35px;
    margin-bottom: 10px;
  }

  & > button:first-child {
    margin-bottom: 40px;
  }
`;

export const DialogContainer = styled.div`
  margin: auto;
  position: absolute;

  left: 25%;
  top: 90px;

  width: 40%;
  height: 40%;
`;

export const DialogText = styled.p`
  padding: 30px 25px 30px;
  background: #fff;
  font-size: 25px;
  text-align: justify;
`;

export const DialogButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 5px;

  & > button {
    width: 250px;
  }
`;
