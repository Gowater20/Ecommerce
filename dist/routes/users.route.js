"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const users_controllers_1 = require("../controllers/users.controllers");
exports.router = (0, express_1.Router)();
exports.router.get("/", users_controllers_1.showUserHandler);
exports.router.get("/:id", users_controllers_1.showUserByIdHandler);
exports.router.post("/", users_controllers_1.addNewUserHandler);
exports.router.delete("/:id", users_controllers_1.deleteUserHandler);
exports.router.patch("/:id", users_controllers_1.updateUserHandler);
