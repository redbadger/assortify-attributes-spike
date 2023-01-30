import { PrismaSelect } from "@paljs/plugins";
import { Prisma } from "@prisma/client";
import { toGlobalId } from "graphql-relay";
import { omit } from "lodash-es";
import {
  inputObjectType,
  list,
  mutationType,
  nonNull,
  objectType,
  queryType,
} from "nexus";
import "./__generated__/nexus.js";

export const ProductLifecycleGroup = objectType({
  name: "ProductLifecycleGroup",
  definition: (t) => {
    t.model.name();
    t.model.displayName();
  },
});

export const Channel = objectType({
  name: "Channel",
  definition: (t) => {
    t.nonNull.id("id", {
      resolve: ({ id }: any) => toGlobalId("Channel", String(id)),
    });
    t.model.id({ alias: "ownId" });
    t.model.name();
  },
});

export const ChannelInProductList = objectType({
  name: "ChannelInProductList",
  definition: (t) => {
    t.nonNull.id("id", {
      resolve: ({ id }: any) => toGlobalId("ChannelInProductList", String(id)),
    });
    t.model.id({ alias: "ownId" });
    t.model.channel();
  },
});

export const ChannelInProductListUpdateManyMutationInput = inputObjectType({
  name: "ChannelInProductListUpdateManyMutationInput",
  definition: (t) => {
    t.int("_dummy_field", {
      // See: https://github.com/graphql-nexus/nexus-plugin-prisma/issues/801
      description: "Dummy field to avoid Error",
    });
  },
});

export const Distribution = objectType({
  name: "Distribution",
  definition: (t) => {
    t.nonNull.id("id", {
      resolve: ({ id }: any) => toGlobalId("Distribution", String(id)),
    });
    t.model.id({ alias: "ownId" });
    t.model.name();
    t.model.doorCount();
    t.model.channel();
  },
});

export const DistributionForProductInProductList = objectType({
  name: "DistributionForProductInProductList",
  definition: (t) => {
    t.nonNull.id("id", {
      resolve: ({ id }: any) =>
        toGlobalId("DistributionForProductInProductList", String(id)),
    });
    t.model.id({ alias: "ownId" });
    t.model.distribution();
  },
});

export const DistributionForProductInProductListUpdateManyMutationInput =
  inputObjectType({
    name: "DistributionForProductInProductListUpdateManyMutationInput",
    definition: (t) => {
      t.int("_dummy_field", {
        // See: https://github.com/graphql-nexus/nexus-plugin-prisma/issues/801
        description: "Dummy field to avoid Error",
      });
    },
  });

export const Product = objectType({
  name: "Product",
  definition: (t) => {
    t.nonNull.id("id", {
      resolve: ({ id }: any) => toGlobalId("Product", String(id)),
    });
    t.model.id({ alias: "ownId" });
    t.model.pc9();
    t.model.colorwayName();
  },
});

export const ProductInProductList = objectType({
  name: "ProductInProductList",
  definition: (t) => {
    t.nonNull.id("id", {
      resolve: ({ id }: any) => toGlobalId("ProductInProductList", String(id)),
    });
    t.model.id({ alias: "ownId" });
    t.model.exclusive();
    t.model.exclusiveComments();
    t.model.minimumOrderQuantity();
    t.model.productLifecycleGroup();
    t.model.distributions();
  },
});

export const ProductListProduct = objectType({
  name: "ProductListProduct",
  definition: (t) => {
    t.nonNull.id("id", {
      resolve: ({ id }: any) => toGlobalId("ProductListProduct", String(id)),
    });
    t.nonNull.field("product", { type: Product });
    t.nonNull.field("productInProductList", { type: ProductInProductList });
  },
});

export const ProductList = objectType({
  name: "ProductList",
  definition: (t) => {
    t.nonNull.id("id", {
      resolve: ({ id }: any) => toGlobalId("ProductList", String(id)),
    });
    t.model.id({ alias: "ownId" });
    t.model.title();
    t.model.channels();

    t.field("validDistributions", {
      type: nonNull(list(nonNull(Distribution))),
      resolve: async ({ id }: any, _args, { prisma }) => {
        const result = await prisma.productList.findUnique({
          where: { id },
          select: {
            channels: {
              select: { channel: { select: { distributions: true } } },
            },
          },
        });

        return (
          result?.channels.map((_) => _.channel.distributions).flat() ?? []
        );
      },
    });

    t.connectionField("productListProductConnection", {
      type: ProductListProduct,
      nodes: async ({ id }: any, _args, { prisma }, info) => {
        const select = new PrismaSelect(info).value.select.edges.select.node
          .select.productInProductList.select;

        const result = (await prisma.productInProductList.findMany({
          where: { productListId: { equals: id } },
          select: { ...omit(select, "ownId"), product: true, id: true },
        })) as any;

        const output = result.map((_) => ({
          id: _.id,
          product: _.product,
          productInProductList: omit(_, "product"),
        }));

        return output;
      },
    });
  },
});

export const Query = queryType({
  definition: (t) => {
    t.crud.product();
    t.crud.products({ filtering: true });

    t.crud.productList();
    t.crud.productLists({ filtering: true });

    t.crud.productLifecycleGroup();
    t.crud.productLifecycleGroups({ filtering: true });
  },
});

export const ProductInProductListUpdateRowInput = inputObjectType({
  name: "ProductInProductListUpdateRowInput",
  definition: (t) => {
    t.nonNull.field("data", { type: "ProductInProductListUpdateInput" });
    t.nonNull.field("where", { type: "ProductInProductListWhereUniqueInput" });
  },
});

export const Mutation = mutationType({
  definition: (t) => {
    t.crud.updateOneProductInProductList();

    t.field("updateManyProductInProductList", {
      type: list(nonNull("ProductInProductList")),
      args: { data: list(nonNull("ProductInProductListUpdateRowInput")) },
      resolve: (_root, args, { prisma }) => {
        if (!args.data) throw new Error("Missing args");

        return prisma.$transaction(
          args.data.map((_) =>
            prisma.productInProductList.update({
              where: _.where as Prisma.ProductInProductListWhereUniqueInput,
              data: _.data as Prisma.ProductInProductListUpdateInput,
            })
          )
        );
      },
    });
  },
});
