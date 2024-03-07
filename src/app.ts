import express from "express";
import { router as usersApi } from "./routes/users.route";
import { router as productsApi } from "./routes/products.route";
import { router as linekartsApi } from "./routes/linekarts.route";
import { router as categoryApi } from "./routes/category.route";
import { router as cardsApi } from "./routes/cards.route";
import { router as cartApi } from "./routes/cart.route";
import { router as ordersApi } from "./routes/orders.route";
import { router as paymentsApi } from "./routes/payments.route";

const app = express();
app.use(express.json());
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ message: "SERVER IS RUNNING!" });
});

app.use("/users", usersApi);
app.use("/products", productsApi);
app.use("/linekarts", linekartsApi);
app.use("/categories", categoryApi);
app.use("/cards", cardsApi);
app.use("/carts", cartApi);
app.use("/orders", ordersApi);
app.use("/payments", paymentsApi);
app.use("/signIn", newRegisterApi);
//app.use("/login",);

export default app;
