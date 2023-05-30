import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
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
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[4, 2, 1]} />
            <Sphere args={[1, 200, 300]} scale={2.5}>
              <MeshDistortMaterial
                color="#562b79"
                attach="material"
                distort={0.5}
                speed={1.5}
              />
            </Sphere>
          </Canvas>
          <Img src="./img/moon.png" />
        </Right>
      </Container>
    </Section>
  );
};
