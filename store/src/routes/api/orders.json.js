import faker from "faker";

export async function get() {
  let orders = new Array(20);
  orders.fill({
    id: faker.datatype.uuid(),
    price: faker.commerce.price(),
    status: "Returned",
    issued_at: faker.date.past(),
    product: {
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      image_url: faker.image.technics(),
      description: faker.commerce.productDescription(),
    },
  });

  return {
    body: {
      orders,
    },
  };
}
