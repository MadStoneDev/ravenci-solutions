interface PaymentOption {
  name: string;
  fee: number;
  installments: number;
}

export const paymentOptions: Record<string, PaymentOption> = {
  "3-months": { name: "3 Monthly Payments", fee: 2, installments: 3 },
  "4-months": { name: "4 Monthly Payments", fee: 5, installments: 4 },
  "6-months": { name: "6 Monthly Payments", fee: 7, installments: 6 },
  "12-months": { name: "12 Monthly Payments", fee: 10, installments: 12 },
};
