import styled from "styled-components";
import Card from "../../ui/Card";
import MarketTable from "./MarketTable";

const StyledMarket = styled(Card)`
  height: 25rem;
`;

function Market() {
  return (
    <StyledMarket>
      <MarketTable />
    </StyledMarket>
  );
}

export default Market;
