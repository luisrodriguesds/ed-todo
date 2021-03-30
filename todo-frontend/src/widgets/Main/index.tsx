import React from 'react';
import CardInput from '../../components/layout/CardInput';
import CardPainel from '../../components/layout/CardPainel';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <div>
        <CardPainel />
      </div>
      <div>
        <CardInput />
      </div>
    </Container>
  );
};

export default Main;
