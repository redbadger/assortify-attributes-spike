import { PrismaSelect } from "@paljs/plugins";
import { toGlobalId } from "graphql-relay";
import { pick } from "lodash-es";
import { objectType, queryType } from "nexus";
import "./__generated__/nexus.js";

export const Product = objectType({
  name: "Product",
  definition: (t) => {
    t.nonNull.id("id", {
      resolve: ({ id }: any) => toGlobalId("Product", String(id)),
    });
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
    t.model.exclusive();
    t.model.exclusiveComments();
    t.model.minimumOrderQuantity();
  },
});

export const ProductListProduct = objectType({
  name: "ProductListProduct",
  definition: (t) => {
    t.nonNull.id("id", {
      resolve: ({ id }: any) => toGlobalId("ProductListProduct", String(id)),
    });
    t.field("product", { type: Product });
    t.field("productInProductList", { type: ProductInProductList });
  },
});

export const ProductList = objectType({
  name: "ProductList",
  definition: (t) => {
    t.model.id();
    t.model.title();

    t.connectionField("productListProductConnection", {
      type: ProductListProduct,
      nodes: async ({ id }, _args, { prisma }, info) => {
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
