import styled from "styled-components";

export const Switch = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: none;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: teal;
  margin: 0 0 0 20px;
  transition: color 0.3s;

  &:hover {
    color: rgb(39, 193, 193);
  }
`;
