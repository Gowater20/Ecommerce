"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    card: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Card",
        required: false,
    },
    cart: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Cart",
        required: true,
    },
    address: {
        type: String,
        required: false,
    },
    date: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });
exports.User = mongoose_1.default.model("User", userSchema);
