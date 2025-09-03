import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const addProgress = async (req, res) => {
  const { topicId } = req.body;
  const { userId } = req.params;

  try {
    const existingProgress = await prisma.progress.findFirst({
      where: {
        userId: parseInt(userId),
        topicId: parseInt(topicId),
      },
    });

    if (existingProgress) {
      return res.status(409).json({ error: "Progress already exists" });
    }

    const newProgress = await prisma.progress.create({
      data: {
        userId: parseInt(userId),
        topicId: parseInt(topicId),
      },
    });

    res.status(201).json(newProgress);
  } catch (error) {
    console.error("Error adding progress:", error);
    res.status(500).json({ error: "Failed to add progress" });
  }
};

export const removeProgress = async (req, res) => {
  const { topicId } = req.body;
  const { userId } = req.params;

  try {
    const removedProgress = await prisma.progress.deleteMany({
      where: {
        userId: parseInt(userId),
        topicId: parseInt(topicId),
      },
    });

    if (removedProgress.count === 0) {
      return res.status(404).json({ error: "Progress not found" });
    }

    res.json({ message: "Progress removed successfully" });
  } catch (error) {
    console.error("Error removing progress:", error);
    res.status(500).json({ error: "Failed to remove progress" });
  }
};

export const getProgress = async (req, res) => {
  const { userId } = req.params;

  try {
    const userProgress = await prisma.progress.findMany({
      where: {
        userId: parseInt(userId),
      },
    });

    const done = userProgress.map((p) => p.topicId);
    const undone = [];

    res.json({ done, undone });
  } catch (error) {
    console.error("Error fetching progress:", error);
    res.status(500).json({ error: "Failed to fetch progress" });
  }
};

export const toggleProgress = async (req, res) => {
  const { topicId, status } = req.body;
  const { userId } = req.params;

  try {
    const existingProgress = await prisma.progress.findFirst({
      where: {
        userId: parseInt(userId),
        topicId: parseInt(topicId),
      },
    });

    if (status === "done" && !existingProgress) {
      const newProgress = await prisma.progress.create({
        data: {
          userId: parseInt(userId),
          topicId: parseInt(topicId),
        },
      });
      res.json({ message: "Progress marked as done", progress: newProgress });
    } else if (status === "undone" && existingProgress) {
      await prisma.progress.delete({
        where: {
          id: existingProgress.id,
        },
      });
      res.json({ message: "Progress marked as undone" });
    } else {
      res.status(400).json({ error: "Invalid status or progress state" });
    }
  } catch (error) {
    console.error("Error toggling progress:", error);
    res.status(500).json({ error: "Failed to toggle progress" });
  }
};

export const getProgressReport = async (req, res) => {
  try {
    const { userId } = req.params;

    const topics = await prisma.topic.findMany({
      select: { id: true, level: true },
    });

    const progress = await prisma.progress.findMany({
      where: { userId: Number(userId) },
      select: { topicId: true },
    });

    const completedIds = new Set(progress.map((p) => p.topicId));

    const stats = topics.reduce((acc, topic) => {
      const level = topic.level;
      if (!acc[level]) {
        acc[level] = { total: 0, done: 0, percentage: 0 };
      }

      acc[level].total += 1;
      if (completedIds.has(topic.id)) {
        acc[level].done += 1;
      }

      return acc;
    }, {});

    for (const level in stats) {
      stats[level].percentage =
        stats[level].total > 0
          ? Math.round((stats[level].done / stats[level].total) * 100)
          : 0;
    }

    return res.status(200).json({
      success: true,
      userId,
      report: stats,
    });
  } catch (error) {
    console.error("Error generating progress report:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch progress report",
      error: error.message,
    });
  }
};
