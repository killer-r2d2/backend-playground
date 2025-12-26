import { Router } from "express";
import { getHealth, getTime, postEcho } from "../controllers/api.controller";

const router = Router();

router.get("/health", getHealth);
router.get("/time", getTime);
router.post("/echo", postEcho);

export default router;
