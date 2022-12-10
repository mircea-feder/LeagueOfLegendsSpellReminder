import { Request, Response, Router } from 'express';
import LiveMatchService from "../service/LiveMatchService";

const router = Router();

router.get('/activePlayerName', async (req: Request, res: Response) => {
  try {
    const activePlayerName = await LiveMatchService.getActivePlayerName();
    res.json(activePlayerName);
  } catch (err: any) {
    res.json({
      error: "Connection refused",
      message: err.message
    });
  }
})

router.get('/spells/summonerName=:summonerName', async (req: Request, res: Response) => {
  // if the endpoint doesn't work, remove the try catch. It worked before I added it
  try {
    const spells = await LiveMatchService.getSpellsForSummoner(req.params.summonerName);
    res.json(spells);
  } catch (err: any) {
    res.json({
      error: "Connection refused",
      message: err.message
    })
  }
});

router.get('/enemyChampionsList', async (req: Request, res: Response) => {
  try {
    const enemyChampions = await LiveMatchService.getEnemyChampionsList();
    res.json(enemyChampions);
  } catch (err: any) {
    res.json({
      error: "Connection refused",
      message: err.message
    })
  }
});

router.get('/lastEvent', async (req: Request, res: Response) => {
  try {
    const lastEvent = await LiveMatchService.getLastEventName();
    res.json(lastEvent);
  } catch (err: any) {
    res.json({
      error: "Connection refused",
      message: err.message
    })
  }
});

export default router;
