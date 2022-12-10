class EnemyChampionData {

  public constructor(
      public championName: string,
      public summonerName: string,
      public spells: string[],
      public unsealedSpellBook: boolean) { }
}

export default EnemyChampionData;
