import styled from "styled-components";
import OrderRow from "./OrderRow";
import { getOrders } from "../../services/apiOrders";
import { useQuery } from "@tanstack/react-query";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  width: 100%;
  overflow-x: scroll;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(8, auto);
  column-gap: 1.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 1rem;
  text-align: center;
`;

function OrdersTable() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  return (
    <Table role="table">
      <TableHeader role="row">
        <div>ID</div>
        <div>Дата создания</div>
        <div>Дата изменения</div>
        <div>Статус</div>
        <div>Действие</div>
        <div>Цена</div>
        <div>Количество</div>
        <div>Актив</div>
      </TableHeader>
      {!isLoading &&
        data.map((order) => <OrderRow order={order} key={order.id} />)}
    </Table>
  );
}

export default OrdersTable;
