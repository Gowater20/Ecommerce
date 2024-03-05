"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const linekart_model_1 = require("./linekart.model");
const cartSchema = new mongoose_1.default.Schema({
    line_kart: {
        type: linekart_model_1.LineKart,
        required: true,
    },
}, { timestamps: true });
exports.Cart = mongoose_1.default.model("Cart", cartSchema);
