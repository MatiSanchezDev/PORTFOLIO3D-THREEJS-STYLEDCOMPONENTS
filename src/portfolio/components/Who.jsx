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
          <Title>Pensar afuera de la caja</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Quien soy</Subtitle>
          </WhatWeDo>
          <Desc>
            Un desarrollador apasionado por el diseño web y el arte 3D.
          </Desc>
          <Button>Mi Portfolio</Button>
        </Right>
      </Container>
    </Section>
  );
};
