import styled from "styled-components";
import MarketRow from "./MarketRow";
import { useQuery } from "@tanstack/react-query";
import { getMarket } from "../../services/apiMarket";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow-y: scroll;
  width: 100%;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function MarketTable() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["market"],
    queryFn: getMarket,
  });

  return (
    <Table role="table">
      <TableHeader role="row">
        <div>Название</div>
        <div>Цена</div>
      </TableHeader>

      {!isLoading &&
        data.map((stock) => <MarketRow stock={stock} key={stock.id} />)}
    </Table>
  );
}

export default MarketTable;
