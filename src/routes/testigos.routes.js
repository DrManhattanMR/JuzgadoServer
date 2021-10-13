import { Router } from "express";
import { getTestigosByCaso, createTestigoCaso } from "../controllers/testigos.controller";

const router = Router();

router.get("/testigo/:IdFolioCaso/:IdFolioIPH", getTestigosByCaso);
//router.get("/testigo", getAllDictamenesMedicos);
router.post("/testigo", createTestigoCaso);
//router.delete("/testigo/:Id", eliminarDictamenMedico);

export default router;