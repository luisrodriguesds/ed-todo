import React, { HTMLAttributes } from 'react';

import { Container } from './styles';

interface IInput extends HTMLAttributes<HTMLInputElement> {}

const Input: React.FC<IInput> = ({ ...rest }) => {
  return (
    <Container>
      <input {...rest} />
    </Container>
  );
};

export default Input;
