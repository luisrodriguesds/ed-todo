import React, { HTMLAttributes } from 'react';

import { Container } from './styles';

interface IColumn extends HTMLAttributes<HTMLDivElement> {}

const Column: React.FC<IColumn> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Column;
