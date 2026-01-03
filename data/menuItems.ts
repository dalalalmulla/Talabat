export type MenuItem = {
    id: string;
    restaurantId: string;
    name: string;
    price: number; // KD
    description: string;
  };
  
  export const menuItems: MenuItem[] = [
    {
      id: "1",
      restaurantId: "1",
      name: "Classic Burger",
      price: 2.75,
      description: "Beef patty, cheese, lettuce, tomato, special sauce.",
    },
    {
      id: "2",
      restaurantId: "1",
      name: "Fries",
      price: 1.0,
      description: "Crispy golden fries.",
    },
    {
      id: "3",
      restaurantId: "2",
      name: "Margherita Pizza",
      price: 3.5,
      description: "Tomato sauce, mozzarella, basil.",
    },
    {
      id: "4",
      restaurantId: "3",
      name: "Salmon Sushi Roll",
      price: 4.25,
      description: "Fresh salmon roll with rice and seaweed.",
    },
    {
      id: "5",
      restaurantId: "4",
      name: "Chicken Shawarma",
      price: 2.25,
      description: "Chicken shawarma with garlic sauce and pickles.",
    },
  ];
  