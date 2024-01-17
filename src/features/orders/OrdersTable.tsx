import styled from "styled-components";
import OrderRow from "./OrderRow";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
  width: 100%;
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
  padding: 1.6rem 1.5rem;
`;

function OrdersTable() {
  return (
    <Table role="table">
      <TableHeader role="row">
        <div>ID</div>
        <div>Дата покупки</div>
        <div>Дата продажи</div>
        <div>Статус</div>
        <div>Действие</div>
        <div>Цена</div>
        <div>Количество</div>
        <div>Актив</div>
      </TableHeader>
      <OrderRow />
    </Table>
  );
}

export default OrdersTable;
