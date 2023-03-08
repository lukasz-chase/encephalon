-- CreateTable
CREATE TABLE "generatedImage" (
    "id" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "generatedImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "generatedImage" ADD CONSTRAINT "generatedImage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
