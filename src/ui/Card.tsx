import styled from "styled-components";

const StyledCard = styled.div`
  padding: 3rem;
  box-shadow: var(--shadow-lg);
  border-radius: var(--border-radius-md);
  backdrop-filter: blur(200px);
  height: 100%;
`;

function Card({ children }) {
  return <StyledCard>{children}</StyledCard>;
}

export default Card;
