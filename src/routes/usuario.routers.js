import { Router } from "express";
import { createUsuario, getAllUsers, eliminarUsuario, updateUsuario } from "../controllers/usuario.controller";
const router = Router();
const jwt = require('jsonwebtoken');
import config from "../config";

router.post("/usuario", VerificarToken, createUsuario);
router.get("/usuario", VerificarToken, ExisteToken, getAllUsers
);
router.delete("/usuario/:Id", VerificarToken, eliminarUsuario);
router.put("/usuario", VerificarToken, updateUsuario);

export default router;
function VerificarToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    console.log(bearerHeader);
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}
function ExisteToken(req, res, next) {
    jwt.verify(req.token, config.my_secret_key, (err, payload) => {
        if (!err) {
            // confirm identity and check user permissions
            req.payload = payload;
            next();
        } else {
            return res.status(403).json(err);
        }
    });
}