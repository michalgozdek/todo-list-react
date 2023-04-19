import { Box, Main, Header, Plus } from "./section";

const Section = ({ title, body, extraHeaderContent }) => (
  <Main>
    <Box className="section__body">
      <Header>{title}</Header>
      {extraHeaderContent}
    </Box>
    <Plus>{body}</Plus>
  </Main>
);

export default Section;
