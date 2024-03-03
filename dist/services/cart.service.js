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
exports.updateLikeKart = exports.deleteAllLineKart = exports.deleteLineKart = exports.showLineKarts = void 0;
const cart_model_1 = require("../models/cart.model");
const line_kart_model_1 = require("../models/line_kart.model");
const showLineKarts = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield cart_model_1.Cart.find();
});
exports.showLineKarts = showLineKarts;
const deleteLineKart = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield cart_model_1.Cart.findByIdAndDelete(id);
});
exports.deleteLineKart = deleteLineKart;
const deleteAllLineKart = () => __awaiter(void 0, void 0, void 0, function* () {
    yield line_kart_model_1.LineKart.deleteMany();
});
exports.deleteAllLineKart = deleteAllLineKart;
const updateLikeKart = (id, product) => __awaiter(void 0, void 0, void 0, function* () {
    return yield cart_model_1.Cart.findByIdAndUpdate(id, product, { new: true });
});
exports.updateLikeKart = updateLikeKart;
