import {
  Button,
  Container,
  Desc,
  Img,
  Left,
  Line,
  Right,
  Section,
  Subtitle,
  Title,
  WhatWeDo,
} from "../styles/HeroStyled";
import { Navbar } from "./";

export const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>What we Do</Subtitle>
          </WhatWeDo>
          <Desc>
            we enjoy creating delighgful, human-centered digtal experiences.
          </Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          {/* 3D modal */}
          <Img src="./img/moon.png" />
        </Right>
      </Container>
    </Section>
  );
};
