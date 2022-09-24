"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// LLamada a la Base de Datos
const database_1 = __importDefault(require("../database"));
class IngesController {
    index(req, res) {
        database_1.default.query('DESCRIBE inges');
        res.send('Soy la pagina principal tipo Face para Inges');
    }
}
const ingesController = new IngesController();
exports.default = ingesController;
