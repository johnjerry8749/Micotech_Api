import express from "express";
import authRoutes from "./auth.routes.js";
import postRoutes from "./post.routes.js";

const Router = express.Router();

Router.use("/auth", authRoutes);
Router.use("/posts", postRoutes);








export default Router