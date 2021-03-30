import styled from 'styled-components';

export const Container = styled.div`
  button {
    color: white;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    cursor: pointer;

    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;

    background-color: var(--dark);
    border: 1px solid var(--primary);
    padding: 6px 8px;

    font-size: 0.875rem;
    border-radius: 5px;

    transition: background-color, color 0.5s;
    &:hover {
      background-color: var(--dark);
      color: white;
    }

    &:focus {
      color: #fff;
      background-color: var(--dark);
      border-color: var(--dark);
      box-shadow: 0 0 0 0.25rem rgb(33 37 41 / 50%);
    }

    &.block {
      display: block;
      width: 100%;
    }
  }
`;
