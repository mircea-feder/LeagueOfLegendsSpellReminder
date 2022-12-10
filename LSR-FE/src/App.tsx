import React, {useEffect, useState} from 'react';
import RiotLiveMatchApi from "./services/RiotLiveMatchApi";
import EnemyChampionData from "./entities/EnemyChampionData";
import './App.scss';
import EnemyChampion from "./components/tsx/EnemyChampion";

const TIMEOUT = 6000;   // 6s timeout between requests

function App() {
  const [enemyChampions, setEnemyChampions] = useState<EnemyChampionData[]>([]);

  useEffect(() => {
    const interval = setInterval(async () => {
      const gameStarted = await RiotLiveMatchApi.getLastEvent();

      if (!gameStarted.error && enemyChampions.length === 0) {
        const aux: EnemyChampionData[] = (await RiotLiveMatchApi.getEnemyChampionsList()).map((ec: {
          championName: string;
          summonerName: string;
          spells: string[];
          unsealedSpellBook: boolean; }) => new EnemyChampionData(
            ec.championName,
            ec.summonerName,
            ec.spells,
            ec.unsealedSpellBook
        ));
        for (let ch of aux)
          console.log(ch.championName);
        setEnemyChampions(aux);
      }
      else if (gameStarted.error !== undefined && enemyChampions.length !== 0) {
        setEnemyChampions([]);
      }

    }, TIMEOUT);

    return () => clearInterval(interval);
  }, [enemyChampions]);

  return (
    <div className="App">
      <ul className={'enemy-champions-list'}>
        {
          enemyChampions.map(ec =>
              <li>
                <EnemyChampion
                    championName={ec.championName}
                    summonerName={ec.summonerName}
                    unsealedSpellBook={ec.unsealedSpellBook}
                    spells={ec.spells} />
              </li>
          )
        }
      </ul>
    </div>
  );
}

export default App;
