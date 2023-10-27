"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const health_1 = __importDefault(require("./health"));
const postTest_1 = __importDefault(require("./postTest"));
exports.default = {
    health: health_1.default,
    postTest: postTest_1.default
};
//# sourceMappingURL=index.js.map