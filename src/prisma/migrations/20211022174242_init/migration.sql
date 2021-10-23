-- CreateEnum
CREATE TYPE "ClosetType" AS ENUM ('MINE', 'SHARE', 'DONATE', 'IDEAL');

-- CreateEnum
CREATE TYPE "SeasonType" AS ENUM ('WINTER', 'SPRING', 'SUMMER', 'FALL');

-- CreateEnum
CREATE TYPE "ApparelType" AS ENUM ('TOP', 'BOTTOM', 'OUTERWEAR', 'SHOES', 'DRESS', 'ACCESSORY', 'NIGHTWEAR', 'SWIMSUIT');

-- CreateEnum
CREATE TYPE "ColorType" AS ENUM ('BLACK', 'BROWN', 'WHITE', 'CREAM', 'PATTERN');

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(75) NOT NULL,
    "firstName" VARCHAR(50),
    "lastName" VARCHAR(50),
    "password" VARCHAR(20) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "item" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "closet" "ClosetType" NOT NULL DEFAULT E'MINE',
    "season" "SeasonType" NOT NULL DEFAULT E'WINTER',
    "color" "ColorType" NOT NULL DEFAULT E'BLACK',
    "apparelType" "ApparelType" NOT NULL DEFAULT E'TOP',
    "shortDesc" VARCHAR(100) NOT NULL,
    "longDesc" VARCHAR(100) NOT NULL,
    "size" VARCHAR(10) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "item_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "item" ADD CONSTRAINT "item_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
