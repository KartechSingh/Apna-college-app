import express from "express";
import { login, signup } from "../controllers/auth-controller/index.js";
const authRoutes = express.Router();

authRoutes.post("/login", login);
authRoutes.post("/signup", signup);

export default authRoutes;
