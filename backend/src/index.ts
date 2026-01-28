import express from "express";
import router from "./router.js";

const app = express();

app.use(express.json());
app.use("/api", router);

async function startApp() {
  try {
    app.listen(3000, () => {
      console.log("Server started at port 3000");
    });
  } catch (error) {
    console.log(error);
  }
}

startApp();
