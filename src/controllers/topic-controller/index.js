import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTopics = async (req, res) => {
  try {
    const topics = await prisma.topic.findMany();
    res.json(topics);
  } catch (error) {
    console.error("Error fetching topics:", error);
    res.status(500).json({ error: "Failed to fetch topics" });
  }
};
