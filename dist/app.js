"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_route_1 = require("./routes/users.route");
const product_route_1 = require("./routes/product.route");
const linekarts_route_1 = require("./routes/linekarts.route");
const category_route_1 = require("./routes/category.route");
const cards_route_1 = require("./routes/cards.route");
//import { router as cartApi} from "./routes/category.route"; //
//import { router as ordersApi} from "./routes/category.route";
//import { router as paymentsApi} from "./routes/category.route";
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
app.get("/", (req, res) => {
    res.json({ message: "SERVER IS RUNNING!" });
});
app.use("/users", users_route_1.router);
//app.use("/product", ApiProduct)
app.use("/products", product_route_1.router);
app.use("/linekarts", linekarts_route_1.router);
app.use("/categories", category_route_1.router);
app.use("/cards", cards_route_1.router);
//app.use("/cart", cartApi)
//app.use("/orders", ordersApi)
//app.use("/payments", paymentsApi)
exports.default = app;
