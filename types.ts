export type User = {
  id: string;
  cart: Array<{
    id: string;
    amount: number;
  }>;
  payment: {
    method: "VISA" | "MASTERCARD";
    cardNumber: number;
  };
};

export type Product = {
  id: string;
  description: string;
};
