import express from "express";
import router from "./router.js";
import cors from "cors";

const app = express();

app.use(cors());
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
