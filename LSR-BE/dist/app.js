"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const LiveMatchController_1 = __importDefault(require("./controller/LiveMatchController"));
const cors = require('cors');
const app = (0, express_1.default)();
const port = 5000;
app.use(express_1.default.json());
app.use(cors());
app.use('/liveMatch', LiveMatchController_1.default);
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
