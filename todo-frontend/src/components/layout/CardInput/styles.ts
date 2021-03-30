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

    input {
      margin-top: 16px;
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

    button {
      margin-top: 16px;

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
      padding: 0.375rem 0.75rem;

      font-size: 1rem;
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
    }
  }
`;
