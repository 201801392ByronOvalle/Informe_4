"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IngesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Soy la pagina tipo Face pero para Inges'));
    }
}
const ingesRoutes = new IngesRoutes();
exports.default = ingesRoutes.router;
