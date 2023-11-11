/*
  Warnings:

  - You are about to drop the column `poolId` on the `ServiceDay` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pool" DROP CONSTRAINT "Pool_serviceDayId_fkey";

-- DropIndex
DROP INDEX "ServiceDay_poolId_key";

-- AlterTable
ALTER TABLE "ServiceDay" DROP COLUMN "poolId",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "ServiceDay_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Pool" ADD CONSTRAINT "Pool_serviceDayId_fkey" FOREIGN KEY ("serviceDayId") REFERENCES "ServiceDay"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
