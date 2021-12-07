import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Main,
  SideNavigator,
  DialogContainer,
  DialogText,
  DialogButtonContainer,
} from './styles';

import Footer from '../../components/Footer';
import Button from '../../components/Button';

const LandingPage = () => {
  return (
    <Container>
      <Main>
        <SideNavigator>
          <Button>Connect Wallet</Button>
          <Link to="mysnowman">
            <Button>My Snowmen</Button>
          </Link>
          <Button>Stake Snowmen</Button>
          <Link to="lodge">
            <Button>Buy $LODGE</Button>
          </Link>
          <Link to="lodge">
            <Button>Farm $LODGE</Button>
          </Link>
        </SideNavigator>

        <DialogContainer>
          <DialogText>
            Ahh the good ole days of Aspen in the 80s. Sex, drugs, and rock and
            roll. There wasn’t a care in the world within that great town of
            fresh powder (oh you were thinking of snow! Yeah that too). Man, the
            partying just never stopped. that was before the great avalanches
            began....
          </DialogText>
          <DialogButtonContainer>
            <Button small red>
              THAT'S ENOUGHT OLD MAN.
            </Button>

            <Button small red>
              TELL ME MORE!
            </Button>
          </DialogButtonContainer>
        </DialogContainer>

        <div id="mint-snowmen-button-container">
          <Link to="roadmap">
            <Button red>MINT SNOWMEN</Button>
          </Link>
        </div>
      </Main>
      <Footer />
    </Container>
  );
};

export default LandingPage;
