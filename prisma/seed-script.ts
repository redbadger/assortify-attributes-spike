import prismaModule from "@prisma/client";

const prisma = new prismaModule.PrismaClient();

const data = [
  {
    product: { pc9: "38004-0257", colorwayName: "38004-0257 REGULAR BLACK" },
    productInProductList: {
      exclusive: "foo",
      exclusiveComments:
        "Brunch enamel pin mixtape forage beard. VHS pickled four loko cronut kale chips austin bodega boys.",
      minimumOrderQuantity: 10,
    },
  },
  {
    product: { pc9: "38004-0278", colorwayName: "38004-0278 NAVY BLUE" },
    productInProductList: {
      exclusive: "bar",
      exclusiveComments:
        "Shabby chic waistcoat vape bespoke whatever echo park williamsburg ennui brunch roof party. Keffiyeh fashion axe mustache direct trade umami.",
      minimumOrderQuantity: 15,
    },
  },
  {
    product: { pc9: "D5465-0010", colorwayName: "D5465-0010 ROYAL BLUE" },
    productInProductList: {
      exclusive: "baz",
      exclusiveComments:
        "Hot chicken wolf YOLO, fingerstache leggings authentic quinoa asymmetrical raclette craft beer kogi pop-up church-key tumeric godard.",
      minimumOrderQuantity: 20,
    },
  },
];

const main = async () => {
  await prisma.product.createMany({
    data: data.map((_) => _.product),
  });

  const products = await prisma.product.findMany();

  await prisma.productList.create({
    data: {
      title: "My new Assortment",
      products: {
        create: products.map(({ id, pc9 }) => ({
          product: { connect: { id } },
          ...data.find((_) => _.product.pc9 === pc9)?.productInProductList,
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
