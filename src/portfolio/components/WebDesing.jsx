import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Webpc } from "./Webpc";
import styled from "styled-components";

const Desc = styled.div`
  width: 240px;
  height: 100px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;
  color: black;
  font-size: 14px;
  font-weight: 300;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const WebDesing = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Webpc />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      <Desc>
        We design products with a strong focus on both world class design and
        ensuring your product is a market success.
      </Desc>
    </>
  );
};
