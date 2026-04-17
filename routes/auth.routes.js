import express from "express";
import { loginUser, registerUser} from "../controllers/auth.controller.js";
import { rateLimitMiddleware } from "../middleware/ratelimit.middleware.js";

const Router = express.Router();


// User registration route
Router.post("/register", rateLimitMiddleware, registerUser);
// User login route
Router.post("/login", rateLimitMiddleware, loginUser);


export default Router;