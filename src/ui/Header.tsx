import Heading from "./Heading";
import styled from "styled-components";

const StyledHeader = styled.header`
  border-bottom: 1px solid var(--color-grey-100);
`;

const Button = styled.button`
  transition: 0.3s all;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-sm);
  border: none;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-brand-50);
  color: var(--color-grey-500);
  box-shadow: var(--shadow-sm);
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  cursor: pointer;

  &:hover {
    box-shadow: var(--shadow-md);
    border: 1px solid var(--color-brand-100);
    transform: translateY(-0.1rem);
  }

  &:active {
    border: 1px solid var(--color-brand-50);
    transform: translateY(0rem);
  }
`;

const Container = styled.div`
  max-width: 120rem;
  padding: 2rem 7rem 1rem;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Heading as={"h1"}>📈 NT Stock</Heading>
        <Button>Login</Button>
      </Container>
    </StyledHeader>
  );
}

export default Header;
