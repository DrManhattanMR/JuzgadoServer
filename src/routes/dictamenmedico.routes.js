import { Router } from "express";
import { getDictamenMedico,createNewDictamenMedico,getAllDictamenesMedicos } from "../controllers/dictamenmedico.controller";

const router = Router();

router.get("/dictamenmedico/:IdFolioCaso/:IdFolioIPH", getDictamenMedico);
router.get("/dictamenmedico", getAllDictamenesMedicos);
router.post("/dictamenmedico", createNewDictamenMedico);


export default router;