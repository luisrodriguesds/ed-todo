import React, { useCallback, useState } from 'react';
import Button from '../../forms/Button';
import Input from '../../forms/Input';
import { Card } from '../CardPainel/styles';

import { Container } from './styles';

interface ICardInput {
  handleCreateProject(name: string): void;
}

const CardInput: React.FC<ICardInput> = ({ handleCreateProject }) => {
  const [projectName, setProjectName] = useState('');

  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      if (!projectName) {
        // call popup
        return;
      }
      handleCreateProject(projectName);
      setProjectName('');
      console.log(projectName);
    },
    [projectName],
  );

  return (
    <Container>
      <Card>
        <form onSubmit={handleSubmit}>
          <h3>Create a new Project</h3>
          <Input
            placeholder="Project Name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <Button label="Create Project" className="block" />
        </form>
      </Card>
    </Container>
  );
};

export default CardInput;
