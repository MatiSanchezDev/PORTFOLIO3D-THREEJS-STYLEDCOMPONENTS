import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Button,
  Container,
  Form,
  Input,
  Left,
  Right,
  Section,
  TextArea,
  Title,
} from "../styles/ContactStyled";
import { ReactMap } from "./ReactMap";

export const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8h9mq09",
        "template_p4npck3",
        ref.current,
        "S4KVDPxiGl_mSfRar"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" type="text" name="name" />
            <Input placeholder="email" type="text" name="email" />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
          <ReactMap />
        </Right>
      </Container>
    </Section>
  );
};
