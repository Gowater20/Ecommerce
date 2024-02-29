"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const cart_model_1 = require("./cart.model");
const user_model_1 = require("./user.model");
const orderSchema = new mongoose_1.default.Schema({
    user: {
        type: user_model_1.User,
        required: true,
    },
    cart: {
        type: cart_model_1.Cart,
        required: true,
    },
    card: {
        type: Number,
        required: true,
    },
    coupon: {
        type: Number,
        required: true,
    },
    expeditionCost: {
        type: Boolean,
        required: true,
    },
});
