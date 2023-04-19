import styled from "styled-components";

export const Main = styled.div`
  border: 1px solid grey;
  max-width: 700px;
  background-color: #fff;
  margin-bottom: 10px;
`;

export const Box = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  grid-gap: 20px;

  @media (max-width: 767px) {
    .section__body {
      grid-template-columns: 1fr;
    }
  }
`;

export const Header = styled.div`
  font-size: 30px;
  margin: 0;
`;

export const Plus = styled.div`
  padding: 20px;
  border-top: 2px solid rgb(219, 224, 224);
`;
