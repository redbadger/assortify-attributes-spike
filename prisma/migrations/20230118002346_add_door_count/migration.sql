/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Distribution` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `doorCount` to the `Distribution` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Distribution" ADD COLUMN     "doorCount" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Distribution.name_unique" ON "Distribution"("name");
