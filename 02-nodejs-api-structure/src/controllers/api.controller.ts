import { Request, Response } from "express";
import { getCurrentTime, echoData } from "../services/api.service";

export function getTime(req: Request, res: Response) {
  const time = getCurrentTime();
  res.json({ time });
}

export function postEcho(req: Request, res: Response) {
  const result = echoData(req.body);
  res.json(result);
}
