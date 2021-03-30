import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<IInput> = ({ ...rest }) => {
  return (
    <Container>
      <input {...rest} />
    </Container>
  );
};

export default Input;
