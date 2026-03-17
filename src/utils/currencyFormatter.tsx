

export const formatCurrency = (amount: number, code = "GBP") =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: code }).format(
    amount
  );
