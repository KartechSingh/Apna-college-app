import express from "express";
import authRoutes from "./authRoutes.js";
import topicRoutes from "./topicRoutes.js";
import progressRoutes from "./progressRoutes.js";
import userRoutes from "./userroutes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/topic", topicRoutes);
router.use("/progress", progressRoutes);
router.use("/user", userRoutes);

export default router;
