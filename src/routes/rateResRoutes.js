import express from "express";
import {
    addRateRestaurant,
    getRateRestaurant,
} from "../controllers/rateResController.js";

const rateResRoutes = express.Router();

rateResRoutes.post("/addRateRes", addRateRestaurant);
rateResRoutes.get("/getRate/:userId/:resId", getRateRestaurant);

export { rateResRoutes };
