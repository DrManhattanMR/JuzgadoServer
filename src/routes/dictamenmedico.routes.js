import { Router } from "express";
import { getDictamenMedico, createNewDictamenMedico, getAllDictamenesMedicos, eliminarDictamenMedico } from "../controllers/dictamenmedico.controller";

const router = Router();

router.get("/dictamenmedico/:IdFolioCaso", getDictamenMedico);
router.get("/dictamenmedico", getAllDictamenesMedicos);
router.post("/dictamenmedico", createNewDictamenMedico);
router.delete("/dictamenmedico/:Id", eliminarDictamenMedico);

export default router;