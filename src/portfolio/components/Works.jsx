import { useState } from "react";
import {
  Container,
  Left,
  List,
  ListItem,
  Right,
  Section,
  data,
} from "../styles/WorksStyled";
import { ProductDesign, Development, WebDesing } from "./";

export const Works = () => {
  const [works, setWorks] = useState("Web Desing");

  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWorks(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {works === "Web Desing" ? (
            <WebDesing />
          ) : works === "Development" ? (
            <Development />
          ) : (
            <ProductDesign />
          )}
        </Right>
      </Container>
    </Section>
  );
};
