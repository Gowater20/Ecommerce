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
exports.updateUser = exports.deleteUser = exports.addNewUser = exports.showUserById = exports.showUsers = void 0;
const user_model_1 = require("../models/user.model");
const showUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.User.find();
});
exports.showUsers = showUsers;
const showUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.User.findById(id);
});
exports.showUserById = showUserById;
const addNewUser = (newUser) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.User.create(newUser);
});
exports.addNewUser = addNewUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.User.findByIdAndDelete(id);
});
exports.deleteUser = deleteUser;
const updateUser = (id, user) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.User.findByIdAndUpdate(id, user, { new: true });
});
exports.updateUser = updateUser;
