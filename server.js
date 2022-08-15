const express = require("express");
const PORT = process.env.PORT || 4000;
const DUMMY = process.env.DUMMY_TEXT;

const app = express();

app.get("/", (req, res) => {
  res.send(`${DUMMY}`);
});

app.listen(PORT, () => {
  console.log(`haha yes, the server is running on port ${PORT}`);
});
