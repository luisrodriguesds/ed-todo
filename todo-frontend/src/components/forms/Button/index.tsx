import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
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
