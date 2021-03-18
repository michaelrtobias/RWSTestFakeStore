const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const axios = require("axios");
const path = require("path");
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Server connected on port: ${process.env.PORT}`);
});
