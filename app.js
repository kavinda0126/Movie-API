const express = require("express");
const app = express();
const dotenv = require("dotenv");
const db = require("./db");

const PORT = 5000;
dotenv.config();

app.use(express.json());
app.use("", require("./routes/routes"));


const server = () => {
  db();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

server();
