import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 16px;

  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  margin-top: 16px;
  width: 100%;
  background: var(--bg-tertiary);
  border: 1px var(--gray) solid;
  border-radius: 8px;

  -webkit-box-shadow: 0px 0px 8px 0px rgba(33, 37, 41, 0.6);
  box-shadow: 0px 0px 8px 0px rgba(33, 37, 41, 0.6);
`;

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  border-bottom: 1px var(--dark) solid;
  background: var(--dark);
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

export const CardFooter = styled.div`
  border-top: 1px solid var(--gray);

  margin-top: 8px;
  padding-top: 16px;

  .card-add-task {
    width: 100%;

    display: flex;
    flex-direction: row;

    div:first-child {
      flex: 1px;
      margin-right: 16px;
    }
  }
`;
