import express from "express";
import {
    createLikeRes,
    deleteLikeRes,
    getLikeRes,
} from "../controllers/likeResControllers.js";

const likeResRoutes = express.Router();

likeResRoutes.post("/createLike", createLikeRes);
likeResRoutes.delete("/deleteLike/:likeId", deleteLikeRes);
likeResRoutes.get("/getLike/:userId/:resId", getLikeRes);

export { likeResRoutes };
