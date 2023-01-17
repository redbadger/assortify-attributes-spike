-- AlterTable
ALTER TABLE "ProductInProductList" ADD COLUMN     "productLifecycleGroupName" TEXT;

-- CreateTable
CREATE TABLE "ProductLifecycleGroup" (
    "name" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,

    PRIMARY KEY ("name")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductLifecycleGroup.displayName_unique" ON "ProductLifecycleGroup"("displayName");

-- AddForeignKey
ALTER TABLE "ProductInProductList" ADD FOREIGN KEY ("productLifecycleGroupName") REFERENCES "ProductLifecycleGroup"("name") ON DELETE SET NULL ON UPDATE CASCADE;
