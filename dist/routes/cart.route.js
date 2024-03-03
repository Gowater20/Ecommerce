"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cart_controllers_1 = require("../controllers/cart.controllers");
const users_route_1 = require("./users.route");
users_route_1.router.get("/", cart_controllers_1.showCartHandler);
users_route_1.router.delete("/:id", cart_controllers_1.deleteLineKartHandler);
users_route_1.router.delete("/cart/", cart_controllers_1.deleteAllLineKartHandler);
users_route_1.router.patch("/:id", cart_controllers_1.updateLineKartHandler);
