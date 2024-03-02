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
exports.updateLineKart = exports.deletedLineKart = exports.addLineKart = exports.showLineKart = void 0;
const linekart_service_1 = require("../services/linekart.service");
const showLineKart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const linekart = yield (0, linekart_service_1.lineKartShow)();
        res.status(200).json(linekart);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.showLineKart = showLineKart;
const addLineKart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("help me");
    try {
        const linekart = yield (0, linekart_service_1.linekartAdd)(req.body);
        res.status(200).json({ meassage: "line kard added :", linekart });
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.addLineKart = addLineKart;
const deletedLineKart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const linekart = yield (0, linekart_service_1.linekartdeleted)(req.params.id);
        res.status(200).json({ message: "linekart deleted:", linekart });
    }
    catch (error) {
        res.status(200).json(error);
    }
});
exports.deletedLineKart = deletedLineKart;
const updateLineKart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const linekart = yield (0, linekart_service_1.linekartUpdate)(req.params.id, req.body);
        res.status(200).json({ message: "linekart updated:", linekart });
    }
    catch (_a) {
        res.status(400).json("error");
    }
});
exports.updateLineKart = updateLineKart;
