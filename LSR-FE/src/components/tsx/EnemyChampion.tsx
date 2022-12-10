import React, {useEffect, useState} from 'react';
import '../scss/EnemyChampion.scss';
import SummonerSpell from "./SummonerSpell";
import RiotLiveMatchApi from "../../services/RiotLiveMatchApi";

const availableSpells: Array<string> = [
  'Barrier', 'Cleanse', 'Exhaust', 'Flash', 'Ghost', 'Heal', 'Ignite', 'Teleport'
];

type Params = {
  championName: string, summonerName: string, unsealedSpellBook: boolean, spells: string[]
}

const EnemyChampion = (params: Params) => {
  const [spells, setSpells] = useState<string[]>(params.spells);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (params.unsealedSpellBook) {
        const newSpells = await RiotLiveMatchApi.getSpellsForSummoner(params.summonerName);
        if (!newSpells.error && (spells[0] !== newSpells[0] || spells[1] !== newSpells[1])) {
          setSpells(newSpells);
        }
      }
    }, params.unsealedSpellBook ? 6000 : 2000000);

    return () => clearInterval(interval)
  }, [spells]);

  return <div className={'enemy-champion'}>
    <img className={'champion-icon'}
         src={`https://raw.githubusercontent.com/frederyc/LeagueOfLegendsIconsStorage/main/icons/${params.championName}.jpg`}
         alt={params.championName} />
    <ul className={'spells-list'}>
      {
        spells.map<JSX.Element>((spell: string) => availableSpells.includes(spell)
            ? <SummonerSpell name={spell} />
            : <></>)
      }
    </ul>
  </div>
}

export default EnemyChampion;
