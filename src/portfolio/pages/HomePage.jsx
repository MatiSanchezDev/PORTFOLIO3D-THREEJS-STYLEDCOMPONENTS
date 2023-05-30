import { Contact, Hero, Navbar, Test, Who, Works } from "../components";
import { Container } from "../styles/HomePageStyled";

export const HomePage = () => {
  return (
    <>
      <Container>
        <Hero />
        <Who />
        <Works />
        <Contact />
      </Container>
    </>
  );
};
