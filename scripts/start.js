"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// specifying devlopement enviorement
process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.blue("Hello world"));
//# sourceMappingURL=start.js.map