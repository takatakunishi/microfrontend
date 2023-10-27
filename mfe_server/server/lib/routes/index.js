"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const testRoute_1 = __importDefault(require("./testRoute"));
const router = express_1.default.Router();
router.use('/', testRoute_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map