import styled from "styled-components";
import Card from "../../ui/Card";
import MarketTable from "./MarketTable";

const StyledMarket = styled.div``;

function Market() {
  return (
    <Card>
      <MarketTable />
    </Card>
  );
}

export default Market;
