-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "House" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "address" TEXT,
    "bathrooms" REAL,
    "bedrooms" INTEGER,
    "price" REAL,
    "utitlities" REAL,
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
    "legitimate" BOOLEAN
);

-- CreateTable
CREATE TABLE "_SavedHouses" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_SavedHouses_A_fkey" FOREIGN KEY ("A") REFERENCES "House" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_SavedHouses_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ViewedHouses" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ViewedHouses_A_fkey" FOREIGN KEY ("A") REFERENCES "House" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ViewedHouses_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_SavedHouses_AB_unique" ON "_SavedHouses"("A", "B");

-- CreateIndex
CREATE INDEX "_SavedHouses_B_index" ON "_SavedHouses"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ViewedHouses_AB_unique" ON "_ViewedHouses"("A", "B");

-- CreateIndex
CREATE INDEX "_ViewedHouses_B_index" ON "_ViewedHouses"("B");
