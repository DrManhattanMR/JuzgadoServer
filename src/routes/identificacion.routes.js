import { Router } from "express";
import { getAllIdentificacion } from "../controllers/identificacion.controller.js";

const router  = Router();

router.get("/identificacion", getAllIdentificacion);

export default router;