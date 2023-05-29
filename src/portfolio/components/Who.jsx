import {
  Button,
  Container,
  Desc,
  Left,
  Line,
  Right,
  Section,
  Subtitle,
  Title,
  WhatWeDo,
} from "../styles/WhoStyled";

export const Who = () => {
  return (
    <Section>
      <Container>
        <Left>{/* 3D modal */}</Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Who we Are</Subtitle>
          </WhatWeDo>
          <Desc>
            a creative group of designers and developers with a passion for the
            arts.
          </Desc>
          <Button>See our Works</Button>
        </Right>
      </Container>
    </Section>
  );
};
