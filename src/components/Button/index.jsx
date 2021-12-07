import React from 'react';

import { Container } from './styles';

const Button = ({ red, small, children, ...rest }) => (
  <Container type="button" red={red} small={small} {...rest}>
    {children}
  </Container>
);

export default Button;
