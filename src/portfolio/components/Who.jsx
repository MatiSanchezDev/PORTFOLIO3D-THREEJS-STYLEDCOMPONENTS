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
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Cube } from "./Cube";

export const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
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
