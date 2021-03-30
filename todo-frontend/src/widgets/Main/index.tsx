import React, { useCallback, useState } from 'react';
import CardInput from '../../components/layout/CardInput';
import CardPainel from '../../components/layout/CardPainel';

import { Container } from './styles';

interface IProject {
  id: string;
  title: string;
  items: {
    id: string;
    title: string;
    isDo: boolean;
  }[];
}

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

const Main: React.FC = () => {
  const [projects, setProjects] = useState(cards);
  const handleCreateProject = useCallback(
    (name: string) => {
      const saveProjects = projects;
      setProjects([
        {
          id: String(Number(saveProjects[saveProjects.length - 1].id) + 1),
          title: name,
          items: [],
        },
        ...saveProjects,
      ]);
    },
    [projects],
  );

  const handleEditProjects = useCallback(
    (project: IProject) => {
      const findProject = projects.find((proj) => proj.id === project.id);
      if (!findProject) {
        return;
      }

      const resEdit = projects.map((proj) => {
        if (project.id === proj.id) {
          return project;
        }
        return proj;
      });

      setProjects(resEdit);
    },
    [projects],
  );

  return (
    <Container>
      <div>
        <CardPainel projects={projects} />
      </div>
      <div>
        <CardInput handleCreateProject={handleCreateProject} />
      </div>
    </Container>
  );
};

export default Main;
