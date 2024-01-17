import SERVER from "./server";

export async function getMarket() {
  const res = await fetch(`${SERVER}/market`);
  const data = await res.json();

  return data;
}
