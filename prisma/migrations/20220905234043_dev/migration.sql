/*
  Warnings:

  - Added the required column `user_id` to the `cows` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cow_id` to the `food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cow_id` to the `literage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cow_id` to the `vaccines` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "cows" DROP CONSTRAINT "cows_id_fkey";

-- AlterTable
ALTER TABLE "cows" ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "food" ADD COLUMN     "cow_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "literage" ADD COLUMN     "cow_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "vaccines" ADD COLUMN     "cow_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "cows" ADD CONSTRAINT "cows_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vaccines" ADD CONSTRAINT "vaccines_cow_id_fkey" FOREIGN KEY ("cow_id") REFERENCES "cows"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "literage" ADD CONSTRAINT "literage_cow_id_fkey" FOREIGN KEY ("cow_id") REFERENCES "cows"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food" ADD CONSTRAINT "food_cow_id_fkey" FOREIGN KEY ("cow_id") REFERENCES "cows"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
