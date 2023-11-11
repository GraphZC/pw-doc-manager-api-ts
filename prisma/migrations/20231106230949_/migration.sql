/*
  Warnings:

  - The primary key for the `ServiceDay` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ServiceDay` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[serviceDayId]` on the table `Pool` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `serviceDayId` to the `Pool` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ServiceDay" DROP CONSTRAINT "ServiceDay_poolId_fkey";

-- AlterTable
ALTER TABLE "Pool" ADD COLUMN     "serviceDayId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "ServiceDay" DROP CONSTRAINT "ServiceDay_pkey",
DROP COLUMN "id";

-- CreateIndex
CREATE UNIQUE INDEX "Pool_serviceDayId_key" ON "Pool"("serviceDayId");

-- AddForeignKey
ALTER TABLE "Pool" ADD CONSTRAINT "Pool_serviceDayId_fkey" FOREIGN KEY ("serviceDayId") REFERENCES "ServiceDay"("poolId") ON DELETE RESTRICT ON UPDATE CASCADE;
