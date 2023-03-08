/*
  Warnings:

  - Added the required column `imageLink` to the `generatedImage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "generatedImage" ADD COLUMN     "imageLink" TEXT NOT NULL;
