/*
  Warnings:

  - The `birthDate` column on the `cows` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `name` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "cows" DROP COLUMN "birthDate",
ADD COLUMN     "birthDate" TIMESTAMP(3),
ALTER COLUMN "milkmaid" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "name" SET NOT NULL;
