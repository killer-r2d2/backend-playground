import { Request, Response } from "express";
import { echoData, getCurrentTime, getHealthStatus } from "../services/api.service";

export function getTime(req: Request, res: Response) {
  const time = getCurrentTime();
  res.json({ time });
}

export function postEcho(req: Request, res: Response) {
  const result = echoData(req.body);
  res.json(result);
}

export function getHealth(req: Request, res: Response) {
  const healthStatus = getHealthStatus();
  res.json(healthStatus);
}
