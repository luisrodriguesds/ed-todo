import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px #ccc solid;
  background: #ddd;

  div {
    span {
      padding: 5px 10px;
      cursor: pointer;
    }
  }
`;
