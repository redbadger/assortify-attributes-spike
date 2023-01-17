-- CreateTable
CREATE TABLE "Distribution" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "channelId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DistributionForProductInProductList" (
    "id" SERIAL NOT NULL,
    "distributionId" INTEGER NOT NULL,
    "productInProductListId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Distribution.name_channelId_unique" ON "Distribution"("name", "channelId");

-- CreateIndex
CREATE UNIQUE INDEX "DistributionForProductInProductList.distributionId_productInProductListId_unique" ON "DistributionForProductInProductList"("distributionId", "productInProductListId");

-- AddForeignKey
ALTER TABLE "Distribution" ADD FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DistributionForProductInProductList" ADD FOREIGN KEY ("distributionId") REFERENCES "Distribution"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DistributionForProductInProductList" ADD FOREIGN KEY ("productInProductListId") REFERENCES "ProductInProductList"("id") ON DELETE CASCADE ON UPDATE CASCADE;
