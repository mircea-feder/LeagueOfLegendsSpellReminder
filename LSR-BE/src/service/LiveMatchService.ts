import axios, {AxiosResponse} from "axios";
import 'dotenv/config'
import EnemyChampionData from "../models/EnemyChampionData";
import requestConfig from "../RequestConfig";

class LiveMatchService {
  private static RIOT_API_BASE_URL: string = 'https://127.0.0.1:2999';

  public static async getActivePlayerName() {
    const playerName: AxiosResponse = await axios.get(
        `${this.RIOT_API_BASE_URL}/liveclientdata/activeplayername`,
        requestConfig
    );
    return playerName.data;
  }

  public static async getSpellsForSummoner(summonerName: string) {
    const spellsJSON: AxiosResponse = await axios.get(
        `${this.RIOT_API_BASE_URL}/liveclientdata/playersummonerspells?summonerName=${summonerName}`,
        requestConfig
    );
    return [spellsJSON.data.summonerSpellOne.displayName, spellsJSON.data.summonerSpellTwo.displayName];
  }

  public static async getEnemyChampionsList() {
    const activePlayerList: AxiosResponse = await axios.get(
        `${this.RIOT_API_BASE_URL}/liveclientdata/playerlist`,
        requestConfig
    );
    const activePlayerName: string = await this.getActivePlayerName();
    let activePlayerTeam: string = "";

    for (let champion of activePlayerList.data) {
       if (champion.summonerName === activePlayerName) {
         activePlayerTeam = champion.team;
         break;
       }
    }

    const enemyChampionsList: EnemyChampionData[] = [];

    for (let champion of activePlayerList.data) {
      if (champion.team !== activePlayerTeam) {
        enemyChampionsList.push(new EnemyChampionData(
            champion.championName,
            champion.summonerName,
            [champion.summonerSpells.summonerSpellOne.displayName, champion.summonerSpells.summonerSpellTwo.displayName],
            champion.runes.keystone.displayName === "Unsealed Spellbook"
        ));
      }
    }

    return enemyChampionsList;
  }

  public static async getLastEventName() {
    const gameStarted: AxiosResponse = await axios.get(
        `${this.RIOT_API_BASE_URL}/liveclientdata/eventdata`,
        requestConfig
    );
    return gameStarted.data.Events[gameStarted.data.Events.length - 1].EventName;
  }
}

export default LiveMatchService;
