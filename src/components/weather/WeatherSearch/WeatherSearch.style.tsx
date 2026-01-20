import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  margin-top: 1.5rem;
  padding: 0.75rem 1rem;

  border-radius: 12px;
  border: 1px solid rgb(210, 210, 215);
  background-color: rgb(255, 255, 255);

  font-size: 1rem;
  color: rgb(29, 29, 31);

  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    border-color: rgb(0, 113, 227);
    box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.15);
  }

  &::placeholder {
    color: rgb(134, 134, 139);
  }
`;
