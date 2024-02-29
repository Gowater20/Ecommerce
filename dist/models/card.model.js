"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const cardSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        require: true,
    },
    surname: {
        type: String,
        require: true,
    },
    pan: {
        type: Number,
        require: true,
    },
    cvc: {
        type: Number,
        require: true,
    },
    expire: {
        type: Date,
        require: true,
    },
}, { timestamps: true });
exports.Card = mongoose_1.default.model("Card", cardSchema);
