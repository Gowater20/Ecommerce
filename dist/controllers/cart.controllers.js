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
exports.updateLineKartHandler = exports.deleteAllLineKartHandler = exports.deleteLineKartHandler = exports.showCartHandler = void 0;
const cart_service_1 = require("../services/cart.service");
const showCartHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productType = yield (0, cart_service_1.showLineKarts)();
    try {
        res.status(200).json(productType);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.showCartHandler = showCartHandler;
const deleteLineKartHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productType = yield (0, cart_service_1.deleteLineKart)(req.params.id);
    try {
        res.status(200).json(productType);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.deleteLineKartHandler = deleteLineKartHandler;
const deleteAllLineKartHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield (0, cart_service_1.deleteAllLineKart)();
    try {
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.deleteAllLineKartHandler = deleteAllLineKartHandler;
const updateLineKartHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const upgradeLineKart = yield (0, cart_service_1.updateLikeKart)(req.params.id, req.body);
    try {
        res.status(200).json(upgradeLineKart);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.updateLineKartHandler = updateLineKartHandler;
