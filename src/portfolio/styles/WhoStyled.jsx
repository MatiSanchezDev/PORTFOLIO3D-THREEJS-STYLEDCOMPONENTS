import styled from "styled-components";

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

/* Left Side of Hero Section */

export const Left = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  font-weight: bold;
  line-height: 90%;
  font-size: 74px;
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
  color: #da4ea2;
  font-weight: bold;
`;

export const Desc = styled.p`
  font-size: 24px;
  color: lightgrey;
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
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
