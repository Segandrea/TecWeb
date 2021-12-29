const db = require("../db");
const Order = require("../models/order").Order;

async function main() {
  db.connect();

  const [start, end] = process.argv.slice(2).map((s) => new Date(s));
  const products = await rentedProducts(start, end);
  console.log(products);

  process.exit(0);
}

async function rentedProducts(start, end) {
  const products = (
    await Order.find(
      {
        state: "open",
        startDate: { $lte: end },
        endDate: { $gte: start },
      },
      "-_id products.productId"
    ).lean()
  ) //                           [{ "products": [{ "productId": "..." }] }, ]
    .map((o) => o.products) //   [[{ "productId": "..." }], ]
    .flat() //                   [{ "productId": "..." }, ]
    .map((p) => p.productId); // ["...", ]

  return products;
}

main();
