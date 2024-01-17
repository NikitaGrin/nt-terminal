import styled from "styled-components";
import Card from "../../ui/Card";

const StyledOrders = styled.div`
  grid-column: 2;
  grid-row: 1 /3;
`;

function Orders() {
  return (
    <StyledOrders>
      <Card>orders</Card>
    </StyledOrders>
  );
}

export default Orders;
