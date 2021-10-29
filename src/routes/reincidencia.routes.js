import { Router } from "express";
import { ObtenerReincidencias, addFechaHoraEntradaJuzgado, addHoraInicioFinAudiencia } from "../controllers/reincidencia.controller";

const router = Router();

//router.get("/folios", getAllFolios);

router.post("/reincidencia", addFechaHoraEntradaJuzgado);

//router.post("/folios", AgregarInfractor);

router.get("/reincidencia/:NumeroIdentificacion", ObtenerReincidencias);

// router.delete("/products/:id", deleteProductById);

router.put("/reincidencia", addHoraInicioFinAudiencia);

export default router;