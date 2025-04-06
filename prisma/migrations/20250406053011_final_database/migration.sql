/*
  Warnings:

  - You are about to drop the column `utitlities` on the `House` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_House" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "address" TEXT,
    "bathrooms" REAL,
    "bedrooms" INTEGER,
    "price" REAL,
    "contact" TEXT,
    "amenities" TEXT,
    "image" TEXT,
    "schoolDistance" REAL,
    "schoolWalkTime" REAL,
    "groceryDistance" REAL,
    "groceryWalkTime" REAL,
    "groceryStore" TEXT,
    "groceryAdress" TEXT,
    "pharmacyDistance" REAL,
    "pharmacyWalkTime" REAL,
    "pharmacyStore" TEXT,
    "pharmacyAdress" TEXT,
    "downtownDistance" REAL,
    "downtownWalkTime" REAL,
    "shuttle" BOOLEAN,
    "legitimate" BOOLEAN,
    "laundry" BOOLEAN,
    "parking" BOOLEAN,
    "ac" BOOLEAN,
    "pet" BOOLEAN,
    "dishwasher" BOOLEAN,
    "cluster" INTEGER
);
INSERT INTO "new_House" ("address", "amenities", "bathrooms", "bedrooms", "downtownDistance", "downtownWalkTime", "groceryAdress", "groceryDistance", "groceryStore", "groceryWalkTime", "id", "image", "legitimate", "name", "pharmacyAdress", "pharmacyDistance", "pharmacyStore", "pharmacyWalkTime", "price", "schoolDistance", "schoolWalkTime", "shuttle") SELECT "address", "amenities", "bathrooms", "bedrooms", "downtownDistance", "downtownWalkTime", "groceryAdress", "groceryDistance", "groceryStore", "groceryWalkTime", "id", "image", "legitimate", "name", "pharmacyAdress", "pharmacyDistance", "pharmacyStore", "pharmacyWalkTime", "price", "schoolDistance", "schoolWalkTime", "shuttle" FROM "House";
DROP TABLE "House";
ALTER TABLE "new_House" RENAME TO "House";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
