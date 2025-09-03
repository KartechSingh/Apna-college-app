import express from "express";
import { getTopics } from "../controllers/topic-controller/index.js";

const topicRoutes = express.Router();

topicRoutes.get("/topics", getTopics);

export default topicRoutes;
