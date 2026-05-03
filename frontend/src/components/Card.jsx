import styled from "styled-components";

const Container = styled.div`
  max-width: 400px;
  margin: auto;
  background-color: #4ec1d8;
`
const Text = styled.h1`
  color: blue;
  font-size: 30px;
`
const Button = styled.button`
  padding: 10px;
  border-radius: 20px;
  color: white;
  background-color: orangered;
`;
const Card = () => {
  return (
    <Container>
      <Text>hii from DDU</Text>
      <Text>hello from the user side</Text>
      <Button>Login</Button>
    </Container>
  );
};

export default Card;
