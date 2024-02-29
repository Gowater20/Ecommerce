"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const card_model_1 = require("./card.model");
const paymentSchema = new mongoose_1.default.Schema({
    card: {
        type: card_model_1.Card,
        required: true,
    },
}, { timestamps: true });
exports.Payment = mongoose_1.default.model("Payment", paymentSchema);
