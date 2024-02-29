"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineKart = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const product_model_1 = require("./product.model");
const lineKartSchema = new mongoose_1.default.Schema({
    product: {
        type: product_model_1.Product,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: false,
    },
}, { timestamps: true });
exports.LineKart = mongoose_1.default.model("LineKart", lineKartSchema);
