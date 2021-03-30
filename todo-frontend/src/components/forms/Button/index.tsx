import React, { HTMLAttributes } from 'react';

import { Container } from './styles';

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: React.FC<IButton> = ({ label, ...rest }) => {
  return (
    <Container>
      <button {...rest}>{label}</button>
    </Container>
  );
};

export default Button;
