export type Restaurant = {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
};

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Burger House",
    cuisine: "Burgers",
    rating: 4.6,
    deliveryTime: "25-35 min",
  },
  {
    id: "2",
    name: "Pizza Palace",
    cuisine: "Italian",
    rating: 4.4,
    deliveryTime: "30-40 min",
  },
  {
    id: "3",
    name: "Sushi Spot",
    cuisine: "Japanese",
    rating: 4.7,
    deliveryTime: "35-45 min",
  },
  {
    id: "4",
    name: "Shawarma Corner",
    cuisine: "Arabic",
    rating: 4.5,
    deliveryTime: "20-30 min",
  },
];
