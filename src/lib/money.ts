export function money(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
