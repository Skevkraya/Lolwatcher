-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TrackedAccount" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "gameName" TEXT NOT NULL,
    "tagLine" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "puuid" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "alertsEnabled" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "TrackedAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_TrackedAccount" ("gameName", "id", "puuid", "region", "tagLine", "userId") SELECT "gameName", "id", "puuid", "region", "tagLine", "userId" FROM "TrackedAccount";
DROP TABLE "TrackedAccount";
ALTER TABLE "new_TrackedAccount" RENAME TO "TrackedAccount";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
