/*
  Warnings:

  - You are about to drop the column `email` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Restaurant` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Table` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "email",
DROP COLUMN "phone",
DROP COLUMN "time",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Restaurant" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Table" DROP COLUMN "updatedAt";
