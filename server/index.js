const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const axios = require("axios");
const path = require("path");
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());

const axiosDataInstance = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

app.get("/data", async (req, res) => {
  try {
    const response = await axiosDataInstance.get(
      "https://fakestoreapi.com/products"
    );
    res.send(response);
    console.log("All products recieved");
  } catch (err) {
    throw err;
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server connected on port: ${process.env.PORT}`);
});
