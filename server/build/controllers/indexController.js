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
    //Consulta a la base datos TODOS los usuarios Get
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.query('SELECT * FROM login', function (error, lista) {
                if (error) {
                    res.status(400).send({ text: 'Error al obtener datos de Usuario' });
                }
                else {
                    res.status(200).send(lista);
                }
            });
        });
    }
    //Consultar un usuario GetOne
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { carnet } = req.params;
            const users = database_1.default.query('SELECT * FROM login WHERE carnet = ?', [carnet], function (error, carnet) {
                if (error) {
                    res.status(400).send({ text: 'Error de carnet de Usuario' });
                }
                else {
                    res.status(200).send(carnet);
                }
            });
        });
    }
    //Creacion de un usuario POST   
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.query('INSERT INTO login set ?', [req.body], function (error, newUser) {
                if (error) {
                    res.status(400).send({ text: 'Error al ingresar usuario' });
                }
                else {
                    res.status(200).send(newUser);
                }
            });
        });
    }
    //Actualizacion de contraseña UPDATE
    update(req, res) {
        res.json({ text: 'Actualizando contraseña ' + req.params.carnet });
    }
}
exports.indexController = new IndexController();
