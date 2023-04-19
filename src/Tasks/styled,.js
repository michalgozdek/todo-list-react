import { css } from "styled-components";
import styled from "styled-components";

export const TasksList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  border-bottom: 2px solid rgb(219, 224, 224);
  align-items: center;
  padding: 10px;
  grid-gap: 10px;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  color: white;
  width: 30px;
  height: 30px;
  border: none;
  transition: background 0.3s;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: rgb(13, 129, 13);

      &:hover {
        background-color: rgb(93, 218, 93);
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background: red;

      &:hover {
        background: rgb(255, 81, 81);
      }
    `}
`;
