const productsOperations = require("./products");

/*
1. Получить все товары - productsOperations.getAll
2. Получить один товар по id - productsOperations.getById
3. Добавить товар - productsOperations.add
4. Обновить товар по id - productsOperations.updateById
5. Удалить товар по id - productsOperations.removeById
*/

const invokeAction = async ({ action, id, data }) => {
  switch (action) {
    case "getAll":
      const products = await productsOperations.getAll();
      console.table(products);
      break;

    case "getById":
      const product = await productsOperations.getById(id);
      if (!product) {
        throw new Error(`Product with id=${id} not found`);
      }
      console.log(product);
      break;

    case "add":
      const newProduct = await productsOperations.add(data);
      console.log(newProduct);
      break;

    case "updateById":
      const updateProduct = await productsOperations.updateById(id, data);
      if (!updateProduct) {
        throw new Error(`Product with id=${id} not found`);
      }
      console.log(updateProduct);
      break;

    case "removeById":
      const removeProduct = await productsOperations.removeById(id);
      console.log(removeProduct);
      break;

    default:
      console.log("Unknown action");
  }
};

// invokeAction({ action: "getAll" });

// const id = "767580d5-f509-4f45-98f9-28e74ec4af66";
// invokeAction({ action: "getById", id });

// const newData = {
//   name: "iPhone 13",
//   price: 90000,
//   location: "Apple store",
// };

// invokeAction({ action: "add", data: newData });

// const updateId = "3a706381-7df7-4ff2-9a94-669ddfeb45f5";

// const updateData = {
//   name: "iPhone 13",
//   price: 99999,
//   location: "Mapple store",
// };

// invokeAction({ action: "updateById", id: updateId, data: updateData });

const idToDelete = "3a706381-7df7-4ff2-9a94-669ddfeb45f5";

invokeAction({ action: "removeById", id: idToDelete });
