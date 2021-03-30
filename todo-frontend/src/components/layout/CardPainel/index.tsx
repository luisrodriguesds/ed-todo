import React, { useState } from 'react';
import { Icon } from 'gestalt';

import {
  Container,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardSection,
} from './styles';

const cards = [
  {
    id: '1',
    title: 'Project ABC',
    items: [
      { id: '11', isDo: false, title: 'Apenas um teste' },
      { id: '22', isDo: false, title: 'Apenas um teste 02' },
      { id: '33', isDo: false, title: 'Apenas um teste 03' },
      { id: '44', isDo: false, title: 'Apenas um teste 04' },
    ],
  },
  {
    id: '2',
    title: 'Project XYZ',
    items: [
      { id: '111', isDo: false, title: 'Apenas um teste' },
      { id: '222', isDo: false, title: 'Apenas um teste 02' },
      { id: '333', isDo: false, title: 'Apenas um teste 03' },
    ],
  },
];

const CardPainel: React.FC = () => {
  const [projects, setProjects] = useState(cards);
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
          </CardBody>
        </Card>
      ))}
    </Container>
  );
};

export default CardPainel;
