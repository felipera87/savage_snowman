import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import {
  Container,
  TopContainer,
  Icons,
  Navigator,
  BottomContainer,
} from './styles';

import Button from '../Button';

import twitterIcon from '../../assets/icons/twitter.png';
import discordIcon from '../../assets/icons/discord.png';
import monogramIcon from '../../assets/icons/monogram.png';
import footerLogo from '../../assets/footer_logo.svg';

const Footer = () => {
  const location = useLocation();

  const isSimpleFooter = useMemo(() => {
    return location.pathname === '/';
  }, [location.pathname]);

  return (
    <Container isSimpleFooter={isSimpleFooter}>
      <TopContainer isSimpleFooter={isSimpleFooter}>
        <Icons>
          <a
            href="https://discord.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={discordIcon} alt="Discord" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a
            href="https://www.google.com/search?q=monogram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={monogramIcon} alt="Monogram" />
          </a>
        </Icons>
        {!isSimpleFooter && (
          <Navigator>
            <Button>Farm</Button>
            <Button>Stake</Button>
            <Button>My Snowmen</Button>
          </Navigator>
        )}
      </TopContainer>
      {!isSimpleFooter && (
        <BottomContainer>
          <img src={footerLogo} alt="Savage Snowmen" />
        </BottomContainer>
      )}
    </Container>
  );
};

export default Footer;
