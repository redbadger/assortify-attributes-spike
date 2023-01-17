import { PrismaSelect } from "@paljs/plugins";
import { Prisma } from "@prisma/client";
import { toGlobalId } from "graphql-relay";
import { pick } from "lodash-es";
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

    t.connectionField("productListProductConnection", {
      type: ProductListProduct,
      nodes: async ({ id }: any, _args, { prisma }, info) => {
        const nodeSelect = new PrismaSelect(info).value.select.edges.select.node
          .select;

        const productFieldNames = Object.keys(nodeSelect.product.select);
        const productInProductListFieldNames = Object.keys(
          nodeSelect.productInProductList.select
        );

        const result = await prisma.$queryRaw`
          SELECT
            pipl.id piplid,
            p.id pid,
            *
          FROM
            "ProductInProductList" pipl
          INNER JOIN "Product" p
            ON p.id = pipl."productId"
          WHERE "productListId" = ${id}
        `;

        const output = result.map((_) => ({
          id: _.piplid,
          product: { ...pick(_, productFieldNames), id: _.pid },
          productInProductList: {
            ...pick(_, productInProductListFieldNames),
            id: _.piplid,
          },
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
