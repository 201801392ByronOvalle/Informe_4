"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Aqui va el import de la db 2 de inges
class IngesController {
    index(req, res) {
        res.send('Soy la pagina principal tipo Face para Inges');
    }
}
const ingesController = new IngesController();
exports.default = ingesController;
