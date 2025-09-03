-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Topic" (
    "id" SERIAL NOT NULL,
    "topic" TEXT NOT NULL,
    "subtopic" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Topic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Progress" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Progress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_DoneTopics" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_DoneTopics_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "public"."_UndoneTopics" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_UndoneTopics_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "public"."User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Progress_userId_key" ON "public"."Progress"("userId");

-- CreateIndex
CREATE INDEX "_DoneTopics_B_index" ON "public"."_DoneTopics"("B");

-- CreateIndex
CREATE INDEX "_UndoneTopics_B_index" ON "public"."_UndoneTopics"("B");

-- AddForeignKey
ALTER TABLE "public"."Progress" ADD CONSTRAINT "Progress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_DoneTopics" ADD CONSTRAINT "_DoneTopics_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Progress"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_DoneTopics" ADD CONSTRAINT "_DoneTopics_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_UndoneTopics" ADD CONSTRAINT "_UndoneTopics_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Progress"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_UndoneTopics" ADD CONSTRAINT "_UndoneTopics_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;
