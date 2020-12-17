const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Index Page");
});

app.get("/random/:numInit/:numEnd", (req, res) => {
  const min = parseInt(req.params.numInit);
  const max = parseInt(req.params.numEnd);
  const result = Math.floor(Math.random() * (max - min) + min);

  if (isNaN(min) || isNaN(max)) {
    res.json({ error: "bad request" });
    return;
  }

  res.json({ randonNumber: result });
});

app.listen(3000, () => {
  console.log("Server listen on port 3000");
});
