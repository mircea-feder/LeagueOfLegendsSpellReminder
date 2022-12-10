"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const https_1 = __importDefault(require("https"));
/**
 * Request configurations applicable to any http request to the riot lol api
 */
const requestConfig = {
    httpsAgent: new https_1.default.Agent({
        rejectUnauthorized: false
    }),
    headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'application/json',
        'X-Riot-Token': process.env.RIOTDEVTOKEN
    }
};
exports.default = requestConfig;
