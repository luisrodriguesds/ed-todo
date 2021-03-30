import React, { HTMLAttributes } from 'react';

import { Container } from './styles';

interface IRow extends HTMLAttributes<HTMLDivElement> {}

const Row: React.FC<IRow> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Row;
