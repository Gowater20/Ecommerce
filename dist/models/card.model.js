"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const cardSchema = new mongoose_1.default.Schema({
    name: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    surname: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    pan: {
        type: Number,
        required: true,
    },
    cvc: {
        type: Number,
        required: true,
    },
    expire: {
        type: Date,
        required: true,
    },
}, { timestamps: true });
exports.Card = mongoose_1.default.model("Card", cardSchema);
