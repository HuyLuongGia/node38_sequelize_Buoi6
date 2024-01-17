import express from "express";
import { likeResRoutes } from "./likeResRoutes.js";
import { rateResRoutes } from "./rateResRoutes.js";

const rootRoutes = express.Router();
rootRoutes.use("/likeRes", likeResRoutes);
rootRoutes.use("/rateRes", rateResRoutes);

export { rootRoutes };
