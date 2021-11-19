/*
  Warnings:

  - You are about to drop the column `isAdmin` on the `user` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'CUSTOMER');

-- AlterTable
ALTER TABLE "user" DROP COLUMN "isAdmin",
ADD COLUMN     "role" TEXT DEFAULT E'MEMBER';
