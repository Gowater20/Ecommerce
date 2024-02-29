import express from "express";
import { router } from "./routes/users.route";

const ApiUser = router;
//const ApiProduct = router;

const app = express();
app.use(express.json());
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ message: "SERVER IS RUNNING!" });
});

app.use("/users", ApiUser)
//app.use("/product", ApiProduct)

export default app;
