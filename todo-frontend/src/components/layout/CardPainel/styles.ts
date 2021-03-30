import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 16px;

  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  margin-top: 10px;
  width: 100%;
  background: #ddd;
  border-width: 0 1px 1px 1px;
  border-color: #ccc;
  border-style: solid;
`;

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  border-bottom: 1px #ccc solid;
  background: #455aaf;
  color: white;
  ul {
    list-style: none;
    li {
      display: inline;

      button {
        background: transparent;
        border: 0;
        cursor: pointer;
        color: white;
        svg {
          fill: currentColor;
        }
      }

      & + li {
        margin-left: 5px;
      }
    }
  }
`;

export const CardTitle = styled.h3``;

export const CardBody = styled.div`
  padding: 16px;

  ul {
    margin-top: 12px;
    list-style: none;
    li {
      display: flex;
      align-items: center;
      margin-left: -8px;
      input {
        margin-right: 8px;
      }
    }
  }
`;

export const CardSection = styled.section`
  & + section {
    margin-top: 16px;
  }
`;
