import React, {useEffect, useState} from 'react';
import '../scss/SummonerSpell.scss';

type Params = {
  name: string;
}

const SummonerSpell = (params: Params) => {
  const absoluteCooldown: number = getSpellCooldown(params.name);
  const [isOnCooldown, setIsOnCooldown] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    counter <= 0 && setIsOnCooldown(false);
  }, [counter]);

  function getSpellCooldown(name: string): number {
    switch (name) {
      case "Barrier":
        return 205;
      case "Cleanse":
        return 205;
      case "Exhaust":
        return 205;
      case "Flash":
        return 295;
      case "Ghost":
        return 205;
      case "Heal":
        return 235;
      case "Ignite":
        return 175;
      case "Teleport":
        return 355;
      default:
        return -1;
    }
  }

  function handleClick(): void {
    if (!isOnCooldown) {
      setIsOnCooldown(true);
      setCounter(absoluteCooldown);
    }
  }

  return <div className={"summoner-spell"} onClick={() => handleClick()}>
    <img className={`spell-icon ${isOnCooldown ? "on-cooldown" : ""}`}
         src={require(`../../resources/spellIcons/${params.name}.jpg`)}
         alt={params.name} />
    { isOnCooldown ? <p className={"spell-cooldown"}>{Math.trunc(counter)}</p> : <></> }
  </div>;
}

export default SummonerSpell;
