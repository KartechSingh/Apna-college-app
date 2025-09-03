// import { PrismaClient } from "@prisma/client";
// import dotenv from "dotenv";

// const prisma = new PrismaClient();
// dotenv.config();

// const topicsData = [
//   {
//     topic: "Algorithms",
//     subtopic: "Sorting Algorithms",
//     level: "EASY",
//   },
//   {
//     topic: "Algorithms",
//     subtopic: "Searching Algorithms",
//     level: "EASY",
//   },
//   {
//     topic: "Algorithms",
//     subtopic: "Dynamic Programming",
//     level: "MEDIUM",
//   },
//   {
//     topic: "Algorithms",
//     subtopic: "Greedy Algorithms",
//     level: "MEDIUM",
//   },
//   {
//     topic: "Algorithms",
//     subtopic: "Divide and Conquer",
//     level: "MEDIUM",
//   },
//   {
//     topic: "Algorithms",
//     subtopic: "Backtracking",
//     level: "HARD",
//   },

//   // Data Structures - 6 subtopics
//   {
//     topic: "Data Structures",
//     subtopic: "Arrays and Strings",
//     level: "EASY",
//   },
//   {
//     topic: "Data Structures",
//     subtopic: "Linked Lists",
//     level: "EASY",
//   },
//   {
//     topic: "Data Structures",
//     subtopic: "Stacks and Queues",
//     level: "EASY",
//   },
//   {
//     topic: "Data Structures",
//     subtopic: "Trees and Binary Search Trees",
//     level: "MEDIUM",
//   },
//   {
//     topic: "Data Structures",
//     subtopic: "Heaps and Priority Queues",
//     level: "MEDIUM",
//   },
//   {
//     topic: "Data Structures",
//     subtopic: "Graphs and Graph Traversal",
//     level: "HARD",
//   },

//   // Databases - 6 subtopics
//   {
//     topic: "Databases",
//     subtopic: "SQL Fundamentals",
//     level: "EASY",
//   },
//   {
//     topic: "Databases",
//     subtopic: "Database Design and Normalization",
//     level: "MEDIUM",
//   },
//   {
//     topic: "Databases",
//     subtopic: "Indexes and Query Optimization",
//     level: "MEDIUM",
//   },
//   {
//     topic: "Databases",
//     subtopic: "Transactions and ACID Properties",
//     level: "MEDIUM",
//   },
//   {
//     topic: "Databases",
//     subtopic: "NoSQL Databases",
//     level: "MEDIUM",
//   },
//   {
//     topic: "Databases",
//     subtopic: "Database Scaling and Sharding",
//     level: "HARD",
//   },

//   // Machine Learning - 6 subtopics
//   {
//     topic: "Machine Learning",
//     subtopic: "Supervised Learning Basics",
//     level: "EASY",
//   },
//   {
//     topic: "Machine Learning",
//     subtopic: "Linear and Logistic Regression",
//     level: "MEDIUM",
//   },
//   {
//     topic: "Machine Learning",
//     subtopic: "Decision Trees and Random Forest",
//     level: "MEDIUM",
//   },
//   {
//     topic: "Machine Learning",
//     subtopic: "Neural Networks",
//     level: "HARD",
//   },
//   {
//     topic: "Machine Learning",
//     subtopic: "Deep Learning and CNNs",
//     level: "HARD",
//   },
//   {
//     topic: "Machine Learning",
//     subtopic: "Natural Language Processing",
//     level: "HARD",
//   },

//   // System Design - 6 subtopics
//   {
//     topic: "System Design",
//     subtopic: "System Design Fundamentals",
//     level: "MEDIUM",
//   },
//   {
//     topic: "System Design",
//     subtopic: "Load Balancing and Caching",
//     level: "MEDIUM",
//   },
//   {
//     topic: "System Design",
//     subtopic: "Database Design Patterns",
//     level: "MEDIUM",
//   },
//   {
//     topic: "System Design",
//     subtopic: "Microservices Architecture",
//     level: "HARD",
//   },
//   {
//     topic: "System Design",
//     subtopic: "Scalability and Performance",
//     level: "HARD",
//   },
//   {
//     topic: "System Design",
//     subtopic: "Distributed Systems",
//     level: "HARD",
//   },

//   // Web Development - 6 subtopics
//   {
//     topic: "Web Development",
//     subtopic: "HTML/CSS Fundamentals",
//     level: "EASY",
//   },
//   {
//     topic: "Web Development",
//     subtopic: "JavaScript ES6+",
//     level: "EASY",
//   },
//   {
//     topic: "Web Development",
//     subtopic: "React.js",
//     level: "MEDIUM",
//   },
//   {
//     topic: "Web Development",
//     subtopic: "Node.js and Express",
//     level: "MEDIUM",
//   },
//   {
//     topic: "Web Development",
//     subtopic: "RESTful APIs and GraphQL",
//     level: "MEDIUM",
//   },
//   {
//     topic: "Web Development",
//     subtopic: "Authentication and Security",
//     level: "HARD",
//   },
// ];

// async function main() {
//   console.log("Start seeding...");

//   // Clear existing data (optional)
//   await prisma.topic.deleteMany({});

//   // Create topics
//   for (const topicData of topicsData) {
//     const topic = await prisma.topic.create({
//       data: topicData,
//     });
//     console.log(`Created topic: ${topic.topic} - ${topic.subtopic}`);
//   }

//   console.log("Seeding finished.");
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
