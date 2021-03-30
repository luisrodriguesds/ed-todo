import React from 'react';
import Button from '../../forms/Button';
import Input from '../../forms/Input';
import { Card } from '../CardPainel/styles';

import { Container } from './styles';

const CardInput: React.FC = () => {
  return (
    <Container>
      <Card>
        <form onSubmit={(e) => e.preventDefault()}>
          <h3>Create a new Project</h3>
          <Input placeholder="Project Name" />
          <Button label="Create Project" className="block" />
        </form>
      </Card>
    </Container>
  );
};

export default CardInput;
