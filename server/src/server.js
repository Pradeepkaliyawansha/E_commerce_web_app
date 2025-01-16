const express = require("express");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

const app = express();

//Middlewares

app.use(express.json());
app.use(cors());

app.listen(5000, () => {
  console.log("server started");
});
