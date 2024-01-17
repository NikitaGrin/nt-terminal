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

const BuyPrice = styled.span`
  color: var(--color-green-700);
`;

const SellPrice = styled.span`
  color: var(--color-red-700);
`;

function MarketRow({ stock }) {
  return (
    <TableRow role="row">
      <div>{stock.name}</div>
      <div>
        <SellPrice>{stock.priceSell}</SellPrice> /{" "}
        <BuyPrice>{stock.priceBuy}</BuyPrice>
      </div>
    </TableRow>
  );
}

export default MarketRow;
