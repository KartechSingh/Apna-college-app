import express from "express";
import { getProgress } from "../controllers/progress-controller/index.js";

const userRoutes = express.Router();

// Get user progress (alternative route that frontend expects)
userRoutes.get("/progress", async (req, res) => {
  // Extract user ID from token (you're storing user.id as token)
  const userId = req.headers.authorization?.replace("Bearer ", "");

  if (!userId) {
    return res.status(401).json({ error: "No authorization token provided" });
  }

  // Modify req.params to match existing controller
  req.params.userId = userId;
  await getProgress(req, res);
});

export default userRoutes;
