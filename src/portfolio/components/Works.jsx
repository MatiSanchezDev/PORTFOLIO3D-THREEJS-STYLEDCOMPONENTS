import {
  Container,
  Left,
  List,
  ListItem,
  Right,
  Section,
  data,
} from "../styles/WorksStyled";

export const Works = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item}>{item}</ListItem>
            ))}
          </List>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  );
};
