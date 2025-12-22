import { Router } from "express";
import { getTime, postEcho } from "../controllers/api.controller";

const router = Router();

router.get("/time", getTime);
router.post("/echo", postEcho);

export default router;
