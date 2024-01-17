import styled from "styled-components";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

function MarketRow() {
  return (
    <TableRow role="row">
      <div>CNH/RUB</div>
      <div>8.558 / 8.559</div>
    </TableRow>
  );
}

export default MarketRow;
