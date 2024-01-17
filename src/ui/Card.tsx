import styled, { css } from "styled-components";

const StyledCard = styled.div`
  box-shadow: var(--shadow-lg);
  border-radius: var(--border-radius-md);
  backdrop-filter: blur(200px);
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${(props) =>
    props.spacing === "true" &&
    css`
      padding: 3rem;
    `}

  ${(props) =>
    props.center === "true" &&
    css`
      padding: 3rem;
      align-items: center;
    `}

  ${(props) =>
    props.tempFix1 === "true" &&
    css`
      grid-column: 2;
      grid-row: 1 /3;
      overflow: hidden;
    `}
`;

function Card({
  children,
  spacing = "false",
  center = "false",
  tempFix1 = "false",
}) {
  return (
    <StyledCard spacing={spacing} center={center} tempFix1={tempFix1}>
      {children}
    </StyledCard>
  );
}

export default Card;
