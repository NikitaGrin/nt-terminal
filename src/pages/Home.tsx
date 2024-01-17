import Market from "../features/market/Market";
import Orders from "../features/orders/Orders";
import Ticker from "../features/ticker/Ticker";
import styled from "styled-components";

const StyledHome = styled.div`
  display: grid;
  grid-template-columns: 30rem 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 3rem;
  row-gap: 4rem;
`;

function Home() {
  return (
    <StyledHome>
      <Ticker />
      <Market />
      <Orders />
    </StyledHome>
  );
}

export default Home;
