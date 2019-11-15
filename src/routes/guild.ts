import { Router } from "express";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";
import GuildController from "../controllers/GuildController";
const router = Router();

router.post("/responses", GuildController.recordResponse);
router.get("/responses", GuildController.getResponses);

export default router;