import styled from "styled-components";
import Card from "../../ui/Card";
import Heading from "../../ui/Heading";
import OrdersTable from "./OrdersTable";

const StyledOrders = styled(Card)`
  padding: 3rem;
  grid-column: 2;
  grid-row: 1 /3;
  overflow-y: scroll;
  height: 55rem;
`;

function Orders() {
  return (
    <StyledOrders>
      <Heading as="h2">Заявки</Heading>
      <OrdersTable />
    </StyledOrders>
  );
}

export default Orders;
