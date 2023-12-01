import {
  finnAndJake,
  rickAndMorty,
  spongebobAndPatrick,
} from "../assets/images/index.js";

const restaurantsData = [
  {
    id: "1",
    name: "Krusty Krab 🦀",
    description:
      "Explore the maritime flavors of Krusty Krab's American-style cuisine through Bookify – a delectable journey of seafood, burgers, and classic comforts.",
    imgURL: spongebobAndPatrick,
    location: "123 Ocean Avenue",
    cuisine: "Seafood",
  },
  {
    id: "2",
    name: "Szechuan Sushi Galaxy 🍣",
    imgURL: rickAndMorty,
    description:
      "Embark on an interdimensional sushi adventure at Szechuan Sushi Galaxy, where each roll is a cosmic blend of traditional Asian flavors, served with a side of multiversal charm.",
    location: "456 Olive Street",
    cuisine: "Italian",
  },
  {
    id: "3",
    name: "Pasta Enchantment 🍝",
    imgURL: finnAndJake,
    description: "Experience the bold flavors of spicy cuisine.",
    location: "789 Pepper Plaza",
    cuisine: "Spicy",
  },
];

export default restaurantsData;
