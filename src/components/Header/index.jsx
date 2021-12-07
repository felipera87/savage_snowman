import React from 'react';

import { Container } from './styles';

import Button from '../Button';

import headerLogo from '../../assets/header_logo.svg';

const Header = () => {
  return (
    <Container>
      <img src={headerLogo} alt="Savage Snowmen" />
      <div>
        <Button>Farm</Button>
        <Button>Stake</Button>
        <Button>My Snowman</Button>
        <Button>Connect Wallet</Button>
      </div>
    </Container>
  );
};

export default Header;
