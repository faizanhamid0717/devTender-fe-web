export const baseURL = "http://localhost:3000";

export const plans = [
  {
    id: 1,
    name: "Silver",
    price: "$9/mo",
    popular: false,
    features: [
      { text: "Basic profile visibility", available: true },
      { text: "5 likes per day", available: true },
      { text: "Limited matches", available: true },
      { text: "Profile boost", available: false },
      { text: "See who liked you", available: false },
    ],
  },
  {
    id: 2,
    name: "Gold",
    price: "$19/mo",
    popular: true,
    features: [
      { text: "Unlimited likes", available: true },
      { text: "See who liked you", available: true },
      { text: "Priority matches", available: true },
      { text: "1 profile boost / month", available: true },
      { text: "Advanced filters", available: false },
    ],
  },
  {
    id: 3,
    name: "Premium",
    price: "$29/mo",
    popular: true,
    features: [
      { text: "Unlimited likes", available: true },
      { text: "Advanced filters", available: true },
      { text: "AI match suggestions", available: true },
      { text: "Profile boost weekly", available: true },
      { text: "Read receipts", available: false },
    ],
  },
];
