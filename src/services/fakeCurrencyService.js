export const currencies = [
  { value: "USD" },
  { value: "CNY" },
  { value: "CAD" },
  { value: "JPY" }
];

export function getCurrencies() {
  return currencies.filter(c => c);
}
