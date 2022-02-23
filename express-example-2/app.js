const express = require("express");
const cors = require("cors");
const products = require("./products");
const res = require("express/lib/response");

const app = express();

app.use(cors());

// Если прийдет GET запрос на адрес /contacts, выполнить эту функцию
app.get("/contacts", (request, response) => {
  // console.log(request.url);
  // console.log(request.method);
  // console.log(request.headers);
  response.send("<h2>Contacts page</h2>");
});

app.get("/contact", (request, response) => {
  response.send("<h2>Contact page</h2>");
});

app.get("/", (request, response) => {
  response.send("<h2>Home page</h2>");
});

app.get("/api/v1/products", (req, res) => {
  res.json(products);
});

app.get("/api/v2/products", (req, res) => {
  res.json(products.slice(0, 10));
});

app.get("/api/v1/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((item) => item._id === id);
  res.json(product);
});

app.listen(3000, () => console.log("server running 3000 port"));
