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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
// LLamada a la Base de Datos
const database_1 = __importDefault(require("../database"));
class IndexController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = database_1.default.query('SELECT * FROM login');
            res.json(usuarios);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { carnet } = req.params;
            const users = database_1.default.query('SELECT * FROM login WHERE carnet = ?', [carnet]);
            console.log(users);
            res.json({ text: 'Usuario Encontrado' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.query('INSERT INTO login set ?', [req.body]);
            res.json({ message: 'Registro de Usuario Guardado' });
        });
    }
    update(req, res) {
        res.json({ text: 'Actualizando contraseña ' + req.params.carnet });
    }
}
exports.indexController = new IndexController();
