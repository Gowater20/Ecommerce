"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserHandler = exports.deleteUserHandler = exports.addNewUserHandler = exports.showUserByIdHandler = exports.showUserHandler = void 0;
const users_service_1 = require("../services/users.service");
const showUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, users_service_1.showUsers)();
    try {
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.showUserHandler = showUserHandler;
const showUserByIdHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, users_service_1.showUserById)(req.params.id);
    try {
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.showUserByIdHandler = showUserByIdHandler;
const addNewUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield (0, users_service_1.addNewUser)(req.body);
    try {
        res.status(200).json({ message: "new user added", newUser });
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.addNewUserHandler = addNewUserHandler;
const deleteUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userToKill = yield (0, users_service_1.deleteUser)(req.params.id);
    try {
        res.status(200).json(userToKill);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.deleteUserHandler = deleteUserHandler;
const updateUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const upgradeUser = yield (0, users_service_1.updateUser)(req.params.id, req.body);
    try {
        res.status(200).json(upgradeUser);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.updateUserHandler = updateUserHandler;
