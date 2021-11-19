/*
  Warnings:

  - You are about to alter the column `email` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(75)` to `VarChar(50)`.
  - You are about to alter the column `firstName` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(50)` to `Char(30)`.
  - You are about to alter the column `lastName` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(50)` to `Char(30)`.
  - You are about to alter the column `password` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(20)`.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "resetPasswordToken" TEXT NOT NULL DEFAULT E'',
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "email" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "firstName" SET DATA TYPE CHAR(30),
ALTER COLUMN "lastName" SET DATA TYPE CHAR(30),
ALTER COLUMN "password" SET DATA TYPE CHAR(20),
ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL;
