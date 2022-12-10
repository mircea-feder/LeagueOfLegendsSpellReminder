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
const express_1 = require("express");
const LiveMatchService_1 = __importDefault(require("../service/LiveMatchService"));
const router = (0, express_1.Router)();
router.get('/activePlayerName', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const activePlayerName = yield LiveMatchService_1.default.getActivePlayerName();
        res.json(activePlayerName);
    }
    catch (err) {
        res.json({
            error: "Connection refused",
            message: err.message
        });
    }
}));
router.get('/spells/summonerName=:summonerName', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // if the endpoint doesn't work, remove the try catch. It worked before I added it
    try {
        const spells = yield LiveMatchService_1.default.getSpellsForSummoner(req.params.summonerName);
        res.json(spells);
    }
    catch (err) {
        res.json({
            error: "Connection refused",
            message: err.message
        });
    }
}));
router.get('/enemyChampionsList', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const enemyChampions = yield LiveMatchService_1.default.getEnemyChampionsList();
        res.json(enemyChampions);
    }
    catch (err) {
        res.json({
            error: "Connection refused",
            message: err.message
        });
    }
}));
router.get('/lastEvent', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lastEvent = yield LiveMatchService_1.default.getLastEventName();
        res.json(lastEvent);
    }
    catch (err) {
        res.json({
            error: "Connection refused",
            message: err.message
        });
    }
}));
exports.default = router;
