import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <h2>ED - Todo</h2>
      <div>
        <span>Luis Rodrigues</span>
      </div>
    </Container>
  );
};

export default Header;
