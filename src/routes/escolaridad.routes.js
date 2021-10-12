import { Router } from "express";
import { getAllEscolaridad } from "../controllers/escolaridad.controller.js";

const router  = Router();

router.get("/escolaridad", getAllEscolaridad);

export default router;