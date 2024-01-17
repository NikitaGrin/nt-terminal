import styled from "styled-components";
import Card from "../../ui/Card";
import Heading from "../../ui/Heading";
import OrdersTable from "./OrdersTable";

function Orders() {
  return (
    <Card spacing={"true"} tempFix1={"true"}>
      <Heading as="h2">Заявки</Heading>
      <OrdersTable />
    </Card>
  );
}

export default Orders;
