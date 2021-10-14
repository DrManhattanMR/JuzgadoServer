import { Router } from "express";
import { getTestigosByCaso, createTestigoCaso, eliminarTestigo } from "../controllers/testigos.controller";

const router = Router();

router.get("/testigo/:IdFolioCaso/:IdFolioIPH", getTestigosByCaso);
//router.get("/testigo", getAllDictamenesMedicos);
router.post("/testigo", createTestigoCaso);
router.delete("/testigo/:id", eliminarTestigo);

export default router;