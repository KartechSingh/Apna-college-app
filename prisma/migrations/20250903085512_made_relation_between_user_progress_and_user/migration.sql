/*
  Warnings:

  - You are about to drop the `_DoneTopics` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_UndoneTopics` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `topicId` to the `Progress` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."_DoneTopics" DROP CONSTRAINT "_DoneTopics_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_DoneTopics" DROP CONSTRAINT "_DoneTopics_B_fkey";

-- DropForeignKey
ALTER TABLE "public"."_UndoneTopics" DROP CONSTRAINT "_UndoneTopics_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_UndoneTopics" DROP CONSTRAINT "_UndoneTopics_B_fkey";

-- DropIndex
DROP INDEX "public"."Progress_userId_key";

-- AlterTable
ALTER TABLE "public"."Progress" ADD COLUMN     "topicId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "public"."_DoneTopics";

-- DropTable
DROP TABLE "public"."_UndoneTopics";

-- AddForeignKey
ALTER TABLE "public"."Progress" ADD CONSTRAINT "Progress_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "public"."Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
