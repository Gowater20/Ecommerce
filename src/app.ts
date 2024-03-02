import express from "express";
import { router as usersApi } from "./routes/users.route";
import { router as productApi } from "./routes/product.route";
import { router as linekartApi } from "./routes/linekart.route";
const app = express();
app.use(express.json());
const PORT = 3000;

app.get("/", (req, res) => {
	res.json({ message: "SERVER IS RUNNING!" });
});

app.use("/users", usersApi);
//app.use("/product", ApiProduct)
app.use("/products", productApi);
app.use("/linekart", linekartApi);
export default app;
