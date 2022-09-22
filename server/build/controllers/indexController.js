"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
// LLamada a la Base de Datos
const database_1 = __importDefault(require("../database"));
class IndexController {
    index(req, res) {
        database_1.default.query('DESCRIBE login');
        res.send('Soy el login');
    }
}
exports.indexController = new IndexController();
