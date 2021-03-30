import styled from 'styled-components';

export const Container = styled.div`
  input {
    width: 100%;
    padding: 6px 8px;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    color: var(--dark);
    background-color: #fff;
    border: 1px solid var(--gray);
    appearance: none;
    border-radius: 5px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:focus {
      color: var(--dark);
      background-color: white;
      border-color: var(--dark);
      outline: 0;
      box-shadow: 0 0 0 0.25rem rgb(33 37 41 / 25%);
    }
  }
`;
