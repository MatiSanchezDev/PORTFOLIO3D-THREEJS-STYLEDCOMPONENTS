import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  color: white;
  background: url("./img/bg.jpeg");
  /* scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  } */
`;
