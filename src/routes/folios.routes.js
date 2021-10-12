import { Router } from "express";
import {
    getAllFolios,
    createNewFolio,
    AgregarInfractor
    // deleteProductById,
    // getTotalProducts,
    //updateProductById,
} from "../controllers/folios.controller.js";

const router = Router();

router.get("/folios", getAllFolios);

//router.post("/folios", createNewFolio);

router.post("/folios", AgregarInfractor);

//router.get("/folios/:id", getProductById);

// router.delete("/products/:id", deleteProductById);

// router.put("/products/:id", updateProductById);

export default router;
