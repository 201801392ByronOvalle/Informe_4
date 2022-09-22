"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ingesController_1 = __importDefault(require("../controllers/ingesController"));
class IngesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', ingesController_1.default.index);
    }
}
const ingesRoutes = new IngesRoutes();
exports.default = ingesRoutes.router;
