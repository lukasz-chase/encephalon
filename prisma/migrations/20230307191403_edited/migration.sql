/*
  Warnings:

  - You are about to drop the column `imageLink` on the `generatedImage` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "generatedImage" DROP COLUMN "imageLink",
ADD COLUMN     "imageLinks" TEXT[];
