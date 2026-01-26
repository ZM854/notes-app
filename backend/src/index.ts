import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Server is working");
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
