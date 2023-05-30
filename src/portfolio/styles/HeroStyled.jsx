import styled from "styled-components";

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

export const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
`;

/* Left Side of Hero Section */

export const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  line-height: 100%;
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Line = styled.img`
  height: 5px;
`;

export const Subtitle = styled.h2`
  font-size: 25px;
  font-weight: bold;
  color: #da4ea2;
`;

export const Desc = styled.p`
  font-size: 24px;
  color: lightgrey;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

export const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 400;
  width: 140px;
  padding: 9px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

/* Right Side of Hero Section */

export const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 50px 0;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;
