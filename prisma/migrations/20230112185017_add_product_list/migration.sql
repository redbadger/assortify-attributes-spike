-- CreateTable
CREATE TABLE "ProductList" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductInProductList" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "productListId" INTEGER NOT NULL,
    "exclusive" TEXT,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductInProductList.productId_productListId_unique" ON "ProductInProductList"("productId", "productListId");

-- AddForeignKey
ALTER TABLE "ProductInProductList" ADD FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductInProductList" ADD FOREIGN KEY ("productListId") REFERENCES "ProductList"("id") ON DELETE CASCADE ON UPDATE CASCADE;
