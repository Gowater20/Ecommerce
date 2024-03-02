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
exports.updateProduct = exports.deletedProduct = exports.addProduct = exports.getProducts = exports.getProductById = void 0;
const product_service_1 = require("../services/product.service");
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, product_service_1.showProduct)(req.params.id);
        if (products) {
            res.status(200).json(products);
        }
        else {
            throw new Error("product not found");
        }
    }
    catch (_a) {
        res.status(404).json("message: errore");
    }
});
exports.getProductById = getProductById;
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, product_service_1.showAllProducts)();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json("message:errore");
    }
});
exports.getProducts = getProducts;
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProduct = yield (0, product_service_1.createProduct)(req.body);
        res.status(200).json({
            message: "User added successfully",
            newProduct,
        });
    }
    catch (error) {
        res.status(400).json("Bad Request");
    }
});
exports.addProduct = addProduct;
const deletedProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield (0, product_service_1.cancelProduct)(req.params.id);
        res.status(200).json({ message: "product deleted", product });
    }
    catch (errore) {
        res.status(400).json("bed request");
    }
});
exports.deletedProduct = deletedProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield (0, product_service_1.upGradeProduct)(req.params.id, req.body);
    try {
        if (product) {
            res.status(200).json({ message: "product update", product });
        }
        else {
            throw new Error("product not found");
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.updateProduct = updateProduct;
