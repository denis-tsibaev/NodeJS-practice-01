const express = require("express");
const cors = require("cors");
const products = require("./products");
const logger = require("morgan");

const app = express(); // app - наш сервер

app.use(cors());
const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use(logger(formatsLogger));

app.listen(4000);
