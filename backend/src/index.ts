import express from "express";
import "dotenv/config";
import router from "./router";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());
app.use(router);

app.listen(process.env.PORT, () => {
  console.log("Rodando");
});
