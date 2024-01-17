import SERVER from "./server";

export async function getOrders() {
  const res = await fetch(`${SERVER}/orders`);
  const data = await res.json();

  return data;
}

export async function createOrder([stock, type]) {
  const newOrder = {
    id: Date.now(),
    creationTime: new Date().toJSON(),
    changeTime: new Date().toJSON(),
    status: "active",
    side: type,
    price: stock.price,
    amount: "500000",
    instrument: stock.name,
  };

  const res = await fetch(`${SERVER}/orders`, {
    method: "POST",
    body: JSON.stringify(newOrder),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  return data;
}
