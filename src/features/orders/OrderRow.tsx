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

function OrderRow() {
  return (
    <TableRow role="row">
      <div>1</div>
      <div>2022-01-01 12:00:00</div>
      <div>2022-01-01 12:00:00</div>
      <div>Active</div>
      <div>Buy</div>
      <div>8.559</div>
      <div>500 000.00</div>
      <div>CNH/RUB</div>
    </TableRow>
  );
}

export default OrderRow;
