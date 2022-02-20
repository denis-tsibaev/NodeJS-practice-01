const getAll = require("./getAll");
const { randomUUID } = require("crypto");
const updateProducts = require("./updateProducts");

const add = async (data) => {
  const products = await getAll();
  const id = randomUUID();
  const newProduct = { ...data, id };
  products.push(newProduct);
  await updateProducts(products);
  return newProduct;
};

module.exports = add;
