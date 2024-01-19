import styled from "styled-components";
import Card from "../../ui/Card";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getMarket } from "../../services/apiMarket";
import { useEffect, useState } from "react";
import { createOrder } from "../../services/apiOrders";
import toast from "react-hot-toast";

const StyledTicker = styled(Card)`
  padding: 3rem;
  align-items: center;
  height: 26rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  const queryClient = useQueryClient();
  const [selectedStock, setSelectedStock] = useState({});
  const [action, setAction] = useState("sell");

  const { data, isLoading, error } = useQuery({
    queryKey: ["market"],
    queryFn: getMarket,
  });

  const { isPending: isCreating, mutate } = useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  function createOrderHandler(e: FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    if (data.amount < 1) {
      toast.error("Amount can't be less than 0!");
      return;
    }
    mutate([
      { ...selectedStock, priceBuy: data.priceBuy, amount: data.amount },
      action,
    ]);
  }

  useEffect(
    function () {
      setSelectedStock(data?.at(0));
    },
    [data]
  );

  return (
    <StyledTicker>
      <Form onSubmit={createOrderHandler}>
        <AssetSelector
          onChange={(e) => setSelectedStock(data[+e.target.value - 1])}
        >
          {!isLoading &&
            data.map((stock) => (
              <option key={stock.id} value={stock.id}>
                {stock.name}
              </option>
            ))}
        </AssetSelector>
        <Input
          type="number"
          defaultValue={selectedStock?.priceBuy}
          name="priceBuy"
        />
        <Input type="number" defaultValue={1} name="amount" />
        <Actions>
          <Action>
            <Price>{selectedStock?.priceSell}</Price>
            <SellButton onClick={() => setAction("sell")}>sell</SellButton>
          </Action>
          <hr />
          <Action>
            <Price>{selectedStock?.priceBuy}</Price>
            <BuyButton onClick={() => setAction("buy")}>buy</BuyButton>
          </Action>
        </Actions>
      </Form>
    </StyledTicker>
  );
}

export default Ticker;
