"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IngesController {
    index(req, res) {
        res.send('Soy la pagina principal tipo Face para Inges');
    }
}
const ingesController = new IngesController();
exports.default = ingesController;
