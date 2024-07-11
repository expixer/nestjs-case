/*
  Warnings:

  - Added the required column `isActive` to the `promotions` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EnumRole" AS ENUM ('ADMIN', 'CARRIERUSER', 'USER');

-- AlterTable
ALTER TABLE "promotions" ADD COLUMN "isActive" BOOLEAN NOT NULL DEFAULT TRUE;

-- CreateTable
CREATE TABLE "user_promotions" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "promotionId" INTEGER NOT NULL,

    CONSTRAINT "user_promotions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_roles" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "role" "EnumRole" NOT NULL,

    CONSTRAINT "user_roles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_promotions_userId_promotionId_key" ON "user_promotions"("userId", "promotionId");

-- AddForeignKey
ALTER TABLE "user_promotions" ADD CONSTRAINT "user_promotions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_promotions" ADD CONSTRAINT "user_promotions_promotionId_fkey" FOREIGN KEY ("promotionId") REFERENCES "promotions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
