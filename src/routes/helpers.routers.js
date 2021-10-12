import { Router } from "express";
import { getHome } from "../controllers/helpers.controller";
const router = Router();

router.get("/helpers", getHome);

export default router;
