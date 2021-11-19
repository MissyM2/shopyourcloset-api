-- AlterTable
ALTER TABLE "user" ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "resetPasswordToken" TEXT NOT NULL DEFAULT E'';
