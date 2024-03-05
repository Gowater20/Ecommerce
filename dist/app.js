"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_route_1 = require("./routes/users.route");
const product_route_1 = require("./routes/product.route");
const linekart_route_1 = require("./routes/linekart.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
app.get("/", (req, res) => {
    res.json({ message: "SERVER IS RUNNING!" });
});
app.use("/users", users_route_1.router);
//app.use("/product", ApiProduct)
app.use("/products", product_route_1.router);
app.use("/linekart", linekart_route_1.router);
exports.default = app;
