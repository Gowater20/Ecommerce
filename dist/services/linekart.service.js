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
exports.linekartUpdate = exports.linekartdeleted = exports.linekartAdd = exports.lineKartShow = void 0;
const line_kart_model_1 = require("../models/line_kart.model");
const lineKartShow = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield line_kart_model_1.LineKart.find();
});
exports.lineKartShow = lineKartShow;
const linekartAdd = (linekart) => __awaiter(void 0, void 0, void 0, function* () {
    return yield line_kart_model_1.LineKart.create(linekart);
});
exports.linekartAdd = linekartAdd;
const linekartdeleted = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield line_kart_model_1.LineKart.findByIdAndDelete(id);
});
exports.linekartdeleted = linekartdeleted;
const linekartUpdate = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    return yield line_kart_model_1.LineKart.findByIdAndUpdate(id, body, { new: true });
});
exports.linekartUpdate = linekartUpdate;
