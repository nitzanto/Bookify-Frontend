import {
  finnAndJake,
  peterAndBrian,
  rickAndMorty,
  spongebobAndPatrick,
} from "../assets/images/index.js";

import { v4 as uuidv } from "uuid";

const restaurantsData = [
  {
    id: uuidv(),
    name: "Krusty Krab 🦀",
    description:
      "Explore the maritime flavors of Krusty Krab's American-style cuisine through Bookify – a delectable journey of seafood, burgers, and classic comforts.",
    imgURL: spongebobAndPatrick,
    rating: 4.5,
    location: "123 Ocean Avenue",
    cuisine: "American",
    reservationDates: [
      new Date("2023-12-01T12:00:00"), // Add more dates as needed
      new Date("2023-12-02T18:30:00"),
      new Date("2023-12-05T15:45:00"),
    ],
  },
  {
    id: uuidv(),
    name: "Szechuan Sushi Galaxy 🍣",
    imgURL: rickAndMorty,
    rating: 5,
    description:
      "Embark on an interdimensional sushi adventure at Szechuan Sushi Galaxy, where each roll is a cosmic blend of traditional Asian flavors, served with a side of multiversal charm.",
    location: "456 Galaxy Station",
    cuisine: "Asian",
    reservationDates: [
      new Date("2023-12-03T20:00:00"),
      new Date("2023-12-04T14:15:00"),
      new Date("2023-12-06T17:30:00"),
    ],
  },
  {
    id: uuidv(),
    name: "Pasta Enchantment 🍝",
    imgURL: finnAndJake,
    rating: 3.6,
    description:
      "Indulge in a culinary journey at Marceline's Pasta Enchantment, an Italian haven, where every dish is crafted with a sprinkle of vampire magic and a dash of mathematical perfection.",
    location: "789 Pepper Plaza",
    cuisine: "Italian",
    reservationDates: [
      new Date("2023-12-02T19:45:00"),
      new Date("2023-12-04T16:00:00"),
      new Date("2023-12-05T21:00:00"),
    ],
  },
  {
    id: uuidv(),
    name: "Quagmire's Brew Haven ☕",
    imgURL: peterAndBrian,
    rating: 4.0,
    description:
      "Quagmire's Brew Haven, the coffee shop in Family Guy, where every cup is as bold as Peter, as smooth as Lois, and as full of surprises as Stewie's schemes.",
    location: "789 Quagmire Avenue",
    cuisine: "Coffee Shop",
    reservationDates: [
      new Date("2023-12-02T19:45:00"),
      new Date("2023-12-04T16:00:00"),
      new Date("2023-12-05T21:00:00"),
    ],
  },
];

export default restaurantsData;
