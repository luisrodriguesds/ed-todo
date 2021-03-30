import React from 'react';
import { Card } from '../CardPainel/styles';

import { Container } from './styles';

const CardInput: React.FC = () => {
  return (
    <Container>
      <Card>
        <form onSubmit={(e) => e.preventDefault()}>
          <h3>Create a new Project</h3>
          <input type="text" placeholder="Project Name" />
          <button>Create Project</button>
        </form>
      </Card>
    </Container>
  );
};

export default CardInput;
