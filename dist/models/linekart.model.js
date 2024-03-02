"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineKart = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const LineKartSchema = new mongoose_1.default.Schema({
    product: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "product",
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
    disount: {
        type: Number,
        required: true,
    },
}, { timestamps: true });
exports.LineKart = mongoose_1.default.model("LineKart", LineKartSchema);
