import styled from "styled-components";

export const Field = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: 767px) {
    .form {
      grid-template-columns: 1fr;
    }
  }
`;

export const Input = styled.input.attrs({})`
  border: 1px solid rgb(170, 173, 173);
`;

export const Button = styled.button`
  background-color: teal;
  color: #fff;
  padding: 10px;
  transition: background 0.3s;

  &:hover {
    background-color: rgb(16, 194, 194);
    transform: scale(1.2);
  }
`;
