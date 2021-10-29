import { Router } from "express";
import { getHome } from "../controllers/helpers.controller";
import { addMultaBoleta } from "../controllers/folios.controller";
const router = Router();

router.get("/helpers", getHome);
router.post("/helpers", addMultaBoleta);

export default router;
