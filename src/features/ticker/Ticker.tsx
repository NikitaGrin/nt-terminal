import styled from "styled-components";
import Card from "../../ui/Card";

const StyledTicker = styled.div`
  padding: 3rem;
`;

const AssetSelector = styled.select`
  border: 1px solid var(--color-brand-100);
  border-radius: var(--border-radius-sm);
  padding: 1rem 1.5rem;
  width: 20rem;
`;

const Input = styled.input`
  border: 1px solid var(--color-brand-100);
  border-radius: var(--border-radius-sm);
  padding: 1rem;
  width: 20rem;
  text-align: center;
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  margin-top: 2rem;
`;

const Action = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;

const Price = styled.span`
  font-size: 2.8rem;
`;

const SellButton = styled.button`
  text-transform: uppercase;
  background-color: var(--color-red-700);
  color: var(--color-red-100);
  padding: 1rem 2rem;
  font-size: 1.6rem;
`;

const BuyButton = styled.button`
  text-transform: uppercase;
  color: var(--color-green-100);
  background-color: #15803d;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  backdrop-filter: 100px;
`;

function Ticker() {
  return (
    <Card spacing={"true"} center={"true"}>
      <AssetSelector name="asset">
        <option value="first">CNH/RUB</option>
      </AssetSelector>
      <Input type="number" defaultValue={0} />
      <Actions>
        <Action>
          <Price>8.558</Price>
          <SellButton>sell</SellButton>
        </Action>
        <hr />
        <Action>
          <Price>8.559</Price>
          <BuyButton>buy</BuyButton>
        </Action>
      </Actions>
    </Card>
  );
}

export default Ticker;
