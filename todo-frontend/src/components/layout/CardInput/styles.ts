import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 16px;

  width: 100%;
  display: flex;
  flex-direction: column;

  form {
    padding: 32px;
    display: flex;
    flex-direction: column;
    text-align: center;

    > div {
      margin-top: 16px;
    }
  }
`;
