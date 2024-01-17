import styled from "styled-components";

const Card = styled.div`
  box-shadow: var(--shadow-lg);
  border-radius: var(--border-radius-md);
  backdrop-filter: blur(200px);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default Card;
