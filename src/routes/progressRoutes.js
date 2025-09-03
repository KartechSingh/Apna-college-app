import express from "express";
import {
  addProgress,
  getProgress,
  removeProgress,
  toggleProgress,
  getProgressReport,
} from "../controllers/progress-controller/index.js";

const progressRoutes = express.Router();

progressRoutes.post("/:userId", addProgress);

progressRoutes.get("/:userId", getProgress);

progressRoutes.delete("/:userId", removeProgress);

progressRoutes.patch("/:userId", toggleProgress);

progressRoutes.get("/:userId/report", getProgressReport);

export default progressRoutes;
