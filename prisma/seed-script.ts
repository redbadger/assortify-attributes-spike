import prismaModule from "@prisma/client";

const prisma = new prismaModule.PrismaClient();

const main = async () => {
  await prisma.product.createMany({
    data: [
      {
        pc9: "38004-0257",
        colorwayName: "38004-0257 REGULAR BLACK",
      },
      {
        pc9: "38004-0278",
        colorwayName: "38004-0278 NAVY BLUE",
      },
      {
        pc9: "D5465-0010",
        colorwayName: "D5465-0010 ROYAL BLUE",
      },
    ],
  });

  const products = await prisma.product.findMany();

  await prisma.productList.create({
    data: {
      title: "My new Assortment",
      products: {
        create: products.map(({ id }) => ({
          product: { connect: { id } },
          exclusive: `${id}`,
        })),
      },
    },
  });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
