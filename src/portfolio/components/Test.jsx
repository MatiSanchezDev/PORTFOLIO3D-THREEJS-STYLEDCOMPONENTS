import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Cube } from "./Cube";
import { Container } from "../styles/TestStyled";

export const Test = () => {
  return (
    <>
      <Container>
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <Cube />
        </Canvas>
      </Container>
    </>
  );
};
