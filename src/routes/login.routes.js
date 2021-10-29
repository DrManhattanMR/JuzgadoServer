import { Router } from "express";
import { userLogin } from "../controllers/login.controller";
const router = Router();

router.post("/login", userLogin);

export default router;