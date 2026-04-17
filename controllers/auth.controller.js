import { register, login } from "../services/auth.service.js";

// Register
export const registerUser = async (req, res, next) => {
    try {
        const user = await register(req.body);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

// Login
export const loginUser = async (req, res, next) => {
    try {
        const data = await login(req.body);
        res.json(data);
    } catch (error) {
        next(error);
    }
};