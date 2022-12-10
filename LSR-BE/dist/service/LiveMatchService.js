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
const axios_1 = __importDefault(require("axios"));
require("dotenv/config");
const EnemyChampionData_1 = __importDefault(require("../models/EnemyChampionData"));
const RequestConfig_1 = __importDefault(require("../RequestConfig"));
class LiveMatchService {
    static getActivePlayerName() {
        return __awaiter(this, void 0, void 0, function* () {
            const playerName = yield axios_1.default.get(`${this.RIOT_API_BASE_URL}/liveclientdata/activeplayername`, RequestConfig_1.default);
            return playerName.data;
        });
    }
    static getSpellsForSummoner(summonerName) {
        return __awaiter(this, void 0, void 0, function* () {
            const spellsJSON = yield axios_1.default.get(`${this.RIOT_API_BASE_URL}/liveclientdata/playersummonerspells?summonerName=${summonerName}`, RequestConfig_1.default);
            return [spellsJSON.data.summonerSpellOne.displayName, spellsJSON.data.summonerSpellTwo.displayName];
        });
    }
    static getEnemyChampionsList() {
        return __awaiter(this, void 0, void 0, function* () {
            const activePlayerList = yield axios_1.default.get(`${this.RIOT_API_BASE_URL}/liveclientdata/playerlist`, RequestConfig_1.default);
            const activePlayerName = yield this.getActivePlayerName();
            let activePlayerTeam = "";
            for (let champion of activePlayerList.data) {
                if (champion.summonerName === activePlayerName) {
                    activePlayerTeam = champion.team;
                    break;
                }
            }
            const enemyChampionsList = [];
            for (let champion of activePlayerList.data) {
                if (champion.team !== activePlayerTeam) {
                    enemyChampionsList.push(new EnemyChampionData_1.default(champion.championName, champion.summonerName, [champion.summonerSpells.summonerSpellOne.displayName, champion.summonerSpells.summonerSpellTwo.displayName], champion.runes.keystone.displayName === "Unsealed Spellbook"));
                }
            }
            return enemyChampionsList;
        });
    }
    static getLastEventName() {
        return __awaiter(this, void 0, void 0, function* () {
            const gameStarted = yield axios_1.default.get(`${this.RIOT_API_BASE_URL}/liveclientdata/eventdata`, RequestConfig_1.default);
            return gameStarted.data.Events[gameStarted.data.Events.length - 1].EventName;
        });
    }
}
LiveMatchService.RIOT_API_BASE_URL = 'https://127.0.0.1:2999';
exports.default = LiveMatchService;
