-- CreateTable
CREATE TABLE "Channel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChannelInProductList" (
    "id" SERIAL NOT NULL,
    "channelId" INTEGER NOT NULL,
    "productListId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Channel.name_unique" ON "Channel"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ChannelInProductList.channelId_productListId_unique" ON "ChannelInProductList"("channelId", "productListId");

-- AddForeignKey
ALTER TABLE "ChannelInProductList" ADD FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChannelInProductList" ADD FOREIGN KEY ("productListId") REFERENCES "ProductList"("id") ON DELETE CASCADE ON UPDATE CASCADE;
