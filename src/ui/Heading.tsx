import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      letter-spacing: 0.5rem;
      word-spacing: 0.5rem;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2.5rem;
      font-weight: 500;
    `}
    

    
  line-height: 1.4;
`;

export default Heading;
