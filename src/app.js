import express from "express";
import cors from "cors";
import productRoutes from "./routes/products.routes";
import folioRoutes from "./routes/folios.routes";
import escolaridadRoutes from "./routes/escolaridad.routes";
import estadocivilRoutes from "./routes/estadocivil.routes";
import identificacionRoutes from "./routes/identificacion.routes";
import helperRoutes from "./routes/helpers.routers";
import dictamenmedicoRoutes from "./routes/dictamenmedico.routes";
import testigoRoutes from "./routes/testigos.routes"
import dictamenpsicRoutes from "./routes/dictamenpsic.routes";
import infractorRoutes from "./routes/infractor.routes"
import reincidenciaRoutes from "./routes/reincidencia.routes"
import usuarioRoutes from "./routes/usuario.routers"
import morgan from "morgan";

import config from "./config";

const app = express();

// settings
app.set("port", config.port);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api", helperRoutes);
app.use("/api", folioRoutes);
app.use("/api", escolaridadRoutes);
app.use("/api", estadocivilRoutes);
app.use("/api", identificacionRoutes);

app.use("/api", testigoRoutes);
app.use("/api", dictamenmedicoRoutes);
app.use("/api", dictamenpsicRoutes);
app.use("/api", infractorRoutes);
app.use("/api", reincidenciaRoutes);
app.use("/api", usuarioRoutes);
export default app;
