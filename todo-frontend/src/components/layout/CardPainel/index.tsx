import React, { useState } from 'react';
import { Icon } from 'gestalt';

import {
  Container,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardSection,
  CardFooter,
} from './styles';
import Input from '../../forms/Input';
import Button from '../../forms/Button';

interface IProject {
  id: string;
  title: string;
  items: {
    id: string;
    title: string;
    isDo: boolean;
  }[];
}

interface ICardPainel {
  projects: IProject[];
}

const CardPainel: React.FC<ICardPainel> = ({ projects }) => {
  return (
    <Container>
      {projects.map((project) => (
        <Card key={project.id}>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <ul>
              <li>
                <button type="button">
                  <Icon
                    icon="trash-can"
                    accessibilityLabel="Pin"
                    color="white"
                  />
                </button>
              </li>
              <li>
                <button type="button">
                  <Icon icon="edit" accessibilityLabel="Pin" color="white" />
                </button>
              </li>
            </ul>
          </CardHeader>
          <CardBody>
            <CardSection>
              <h3>To Do</h3>
              <ul>
                {project.items
                  .filter((item) => item.isDo !== true)
                  .map((item) => (
                    <li key={item.id}>
                      <input type="checkbox" /> {item.title}
                    </li>
                  ))}
              </ul>
            </CardSection>
            <CardSection>
              <h3>Done</h3>
              <ul>
                {project.items
                  .filter((item) => item.isDo === true)
                  .map((item) => (
                    <li key={item.id}>
                      <input type="checkbox" />
                      <label htmlFor="">{item.title}</label>
                    </li>
                  ))}
              </ul>
            </CardSection>
            <CardFooter>
              <form className="card-add-task">
                <Input placeholder="Task" />
                <Button label="Add" />
              </form>
            </CardFooter>
          </CardBody>
        </Card>
      ))}
    </Container>
  );
};

export default CardPainel;
