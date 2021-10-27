import { Router } from "express";
import { createUsuario, getAllUsers, eliminarUsuario, updateUsuario } from "../controllers/usuario.controller";
const router = Router();

router.post("/usuario", createUsuario);
router.get("/usuario", getAllUsers);
router.delete("/usuario/:Id", eliminarUsuario);
router.put("/usuario", updateUsuario);

export default router;