import { Router } from "express";
import { getDictamenPsic, createNewDictamenPsic, getAllDictamenesPsic, eliminarDictamenPsic, editarDictamenPsic } from "../controllers/dictamenpsic.controller";

const router = Router();

router.get("/dictamenpsic/:IdFolioCaso", getDictamenPsic);
router.get("/dictamenpsic", getAllDictamenesPsic);
router.post("/dictamenpsic", createNewDictamenPsic);
router.delete("/dictamenpsic/:Id", eliminarDictamenPsic);
router.put("/dictamenpsic/:id", editarDictamenPsic);



export default router;