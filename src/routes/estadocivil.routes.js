import { Router } from "express";
import { getAllEstadoCivil } from "../controllers/estadocivil.controller.js";

const router  = Router();

router.get("/estadocivil", getAllEstadoCivil);

export default router;