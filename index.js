const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("API working 🔥");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
app.get("/predict", (req, res) => {
  const result = Math.random() > 0.5 ? "Big" : "Small";
  res.json({
    prediction: result,
    number: Math.floor(Math.random() * 10)
  });
});
