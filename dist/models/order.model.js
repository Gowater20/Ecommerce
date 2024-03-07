"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const cart_model_1 = require("./cart.model");
const user_model_1 = require("./user.model");
const card_model_1 = require("./card.model");
const orderSchema = new mongoose_1.default.Schema({
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: user_model_1.User,
        required: true,
    },
    cart: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: cart_model_1.Cart,
        required: true,
    },
    card: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: card_model_1.Card,
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
exports.Order = mongoose_1.default.model("Order", orderSchema);
