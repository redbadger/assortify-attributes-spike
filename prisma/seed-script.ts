import prismaModule from "@prisma/client";

const prisma = new prismaModule.PrismaClient();

const data = [
  {
    product: { pc9: "38004-0257", colorwayName: "38004-0257 REGULAR BLACK" },
    productInProductList: {
      exclusive: "foo",
      exclusiveComments:
        "Brunch enamel pin mixtape forage beard. VHS pickled four loko cronut.",
      minimumOrderQuantity: 10,
      productLifecycleGroup: {
        connect: { displayName: "Seasonal" },
      },
      distributions: {
        create: [
          { distribution: { connect: { name: "HOT_V1" } } },
          { distribution: { connect: { name: "MENS_CORE_V1" } } },
        ],
      },
    },
  },
  {
    product: { pc9: "38004-0278", colorwayName: "38004-0278 NAVY BLUE" },
    productInProductList: {
      exclusive: "bar",
      exclusiveComments:
        "Shabby chic waistcoat vape bespoke whatever echo park williamsburg ennui brunch roof party.",
      minimumOrderQuantity: 15,
      productLifecycleGroup: {
        connect: { displayName: "Core" },
      },
    },
  },
  {
    product: { pc9: "D5465-0010", colorwayName: "D5465-0010 ROYAL BLUE" },
    productInProductList: {
      exclusive: "baz",
      exclusiveComments:
        "Hot chicken wolf YOLO, fingerstache leggings authentic quinoa asymmetrical raclette.",
      minimumOrderQuantity: 20,
      productLifecycleGroup: {
        connect: { displayName: "Core" },
      },
    },
  },
];

const main = async () => {
  await prisma.channel.createMany({
    data: [{ name: "Mainline" }, { name: "Outlet" }, { name: "Wholesale" }],
  });

  await Promise.all([
    prisma.distribution.create({
      data: { name: "HOT_V1", channel: { connect: { name: "Mainline" } } },
    }),
    prisma.distribution.create({
      data: {
        name: "MENS_CORE_V1",
        channel: { connect: { name: "Mainline" } },
      },
    }),
    prisma.distribution.create({
      data: {
        name: "WOMENS_CORE_PLUS_V1",
        channel: { connect: { name: "Outlet" } },
      },
    }),
  ]);

  await prisma.productLifecycleGroup.createMany({
    data: [
      { name: "seasonal", displayName: "Seasonal" },
      { name: "core", displayName: "Core" },
      { name: "fashion", displayName: "Fashion" },
      { name: "seasonalCore", displayName: "Seasonal Core" },
    ],
  });

  await prisma.product.createMany({
    data: data.map((_) => _.product),
  });

  const products = await prisma.product.findMany();

  await prisma.productList.create({
    data: {
      title: "My new Assortment",
      channels: {
        create: [
          { channel: { connect: { name: "Mainline" } } },
          { channel: { connect: { name: "Wholesale" } } },
        ],
      },
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
