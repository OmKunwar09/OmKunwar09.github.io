import { faker } from "@faker-js/faker"

faker.seed(99);

const Pdata = [
    {
        id: 1,
        Name: "Nike",
        price: faker.commerce.price(),
        image: "./images/cap/cap (1).jpg",
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings:faker.helpers.arrayElement([1, 2, 3, 4, 5]),

      },
      {
        id: 2,
        Name: "Shoe",
        price: faker.commerce.price(),
        image: "./images/shoe/shoe(1).jpg",
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings:faker.helpers.arrayElement([1, 2, 3, 4, 5]),

      },
      {
        id: 3,
        Name: "Shoe",
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings:faker.helpers.arrayElement([1, 2, 3, 4, 5]),
        price: faker.commerce.price(),
        image: "../../images/Gloves/gloves (1).jpg",
        
      },
      {
        id: 4,
        Name: "Shoe",
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings:faker.helpers.arrayElement([1, 2, 3, 4, 5]),
        price: faker.commerce.price(),
        image: "./images/cap/cap (2).jpg",
      },
      {
        id: 5,
        Name: "Shoe",
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings:faker.helpers.arrayElement([1, 2, 3, 4, 5]),
        price: faker.commerce.price(),
        image: "../../images/shoe/shoe(2).jpg",
      },
      {
        id: 6,
        Name: "Shoe",
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings:faker.helpers.arrayElement([1, 2, 3, 4, 5]),
        price: faker.commerce.price(),
        image: "../../images/Gloves/gloves (2).jpg",
        
      },
      {
        id: 7,
        Name: "Shoe",
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings:faker.helpers.arrayElement([1, 2, 3, 4, 5]),
        price: faker.commerce.price(),
        image: "../../images/Cap/cap (3).jpg",
      },
      {
        id: 8,
        Name: "Shoe",
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings:faker.helpers.arrayElement([1, 2, 3, 4, 5]),
        price: faker.commerce.price(),
        image: "../../images/shoe/shoe(3).jpg",
      },
      {
        id: 9,
        Name: "Shoe",
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings:faker.helpers.arrayElement([1, 2, 3, 4, 5]),
        price: faker.commerce.price(),
        image: "../../images/Gloves/gloves (3).jpg",
      },
      {
        id: 10,
        Name: "Shoe",
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings:faker.helpers.arrayElement([1, 2, 3, 4, 5]),
        price: faker.commerce.price(),
        image: "../../images/cap/cap (4).jpg",
      },
      {
        id: 11,
        Name: "Shoe",
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings:faker.helpers.arrayElement([1, 2, 3, 4, 5]),
        price: faker.commerce.price(),
        image: "../../images/shoe/shoe(4).jpg",
      },
      {
        id: 12,
        Name: "Shoe",
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings:faker.helpers.arrayElement([1, 2, 3, 4, 5]),
        price: faker.commerce.price(),
        image: "../../images/Gloves/gloves (4).jpg",
      },
      {
        id: 13,
        Name: "Shoe",
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings:faker.helpers.arrayElement([1, 2, 3, 4, 5]),
        price: faker.commerce.price(),
        image: "../../images/cap/cap (5).jpg",
      },
      {
        id: 14,
        Name: "Shoe",
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings:faker.helpers.arrayElement([1, 2, 3, 4, 5]),
        price: faker.commerce.price(),
        image: "../../images/shoe/shoe(5).jpg",
      },
      {
        id: 15,
        Name: "Shoe",
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings:faker.helpers.arrayElement([1, 2, 3, 4, 5]),
        price: faker.commerce.price(),
        image: "../../images/Gloves/gloves (4).jpg",
      },
      {
        id: 16,
        Name: "Shoe",
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings:faker.helpers.arrayElement([1, 2, 3, 4, 5]),
        price: faker.commerce.price(),
        image: "../../images/Gloves/gloves (4).jpg",
      },
      {
        id: 17,
        Name: "Shoe",
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings:faker.helpers.arrayElement([1, 2, 3, 4, 5]),
        price: faker.commerce.price(),
        image: "../../images/shoe/shoe(6).jpg",
      },
      {
        id: 18,
        Name: "Shoe",
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings:faker.helpers.arrayElement([1, 2, 3, 4, 5]),
        price: faker.commerce.price(),
        image: "../../images/Gloves/gloves (4).jpg",
      },
      {
        id: 19,
        Name: "Shoe",
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings:faker.helpers.arrayElement([1, 2, 3, 4, 5]),
        price: faker.commerce.price(),
        image: "../../images/Gloves/gloves (4).jpg",
      },
      {
        id: 20,
        Name: "Shoe",
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings:faker.helpers.arrayElement([1, 2, 3, 4, 5]),
        price: faker.commerce.price(),
        image: "../../images/shoe/shoe(7).jpg",
      },
      {
        id: 21,
        Name: "Shoe",
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings:faker.helpers.arrayElement([1, 2, 3, 4, 5]),
        price: faker.commerce.price(),
        image: "../../images/Gloves/gloves (4).jpg",
      },
      {
        id: 22,
        Name: "Shoe",
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings:faker.helpers.arrayElement([1, 2, 3, 4, 5]),
        price: faker.commerce.price(),
        image: "../../images/shoe/shoe(8).jpg",
      },
      {
        id: 23,
        Name: "Shoe",
        price: faker.commerce.price(),
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings:faker.helpers.arrayElement([1, 2, 3, 4, 5]),
        image: "../../images/Gloves/gloves (4).jpg",
      },
      {
        id: 24,
        Name: "Shoe",
        price: faker.commerce.price(),
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings:faker.helpers.arrayElement([1, 2, 3, 4, 5]),
        image: "../../images/Gloves/gloves (4).jpg",
      },
  ]
  export default Pdata