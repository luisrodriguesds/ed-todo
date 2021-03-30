import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;

    > div:first-child {
      flex: 1px;
    }
  }
`;
