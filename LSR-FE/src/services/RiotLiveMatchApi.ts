import axios from 'axios';

class RiotLiveMatchApi {
    private static baseUrl: string = `${process.env.REACT_APP_LIVE_MATCH_SERVICE_URL}/liveMatch`;

    public static async getActivePlayerName() {
        const activePlayerName = await axios.get(`${this.baseUrl}/activePlayerName`);
        return activePlayerName.data;
    }

    public static async getSpellsForSummoner(summonerName: string) {
        const spellsForSummoner = await axios.get(`${this.baseUrl}/spells/summonerName=${summonerName}`);
        return spellsForSummoner.data;
    }

    public static async getEnemyChampionsList() {
        const enemyChampionsList = await axios.get(`${this.baseUrl}/enemyChampionsList`);
        return enemyChampionsList.data;
    }

    public static async getLastEvent() {
        const lastEvent = await axios.get(`${this.baseUrl}/lastEvent`);
        return lastEvent.data;
    }
}

export default RiotLiveMatchApi;
