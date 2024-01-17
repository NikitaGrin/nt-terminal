import styled from "styled-components";

const TableRow = styled.div`
  display: grid;
  column-gap: 2.2rem;
  align-items: center;
  padding: 1.4rem 1.5rem;
  grid-template-columns: repeat(8, auto);
  overflow: hidden;
  font-size: 1.1rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

function OrderRow({ order }) {
  return (
    <TableRow role="row">
      <div>{order.id}</div>
      <div>{order.creationTime}</div>
      <div>{order.changeTime}</div>
      <div>{order.status}</div>
      <div>{order.side}</div>
      <div>{order.price}</div>
      <div>{order.amount}</div>
      <div>{order.instrument}</div>
    </TableRow>
  );
}

export default OrderRow;
