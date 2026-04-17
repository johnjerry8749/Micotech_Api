import express from "express"
import { createNewPost, getPost, togglepostLike } from "../controllers/post.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";


const Router = express.Router();


Router.post("/", authMiddleware, createNewPost);
Router.get("/", authMiddleware, getPost);
Router.patch("/:id/like", authMiddleware, togglepostLike);


export default Router;