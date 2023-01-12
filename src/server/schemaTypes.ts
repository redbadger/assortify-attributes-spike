import { connectionFromArray } from "graphql-relay";
import { omit } from "lodash-es";
import { objectType, queryType } from "nexus";
import "./__generated__/nexus.js";

export const Product = objectType({
  name: "Product",
  definition: (t) => {
    t.model.id();
    t.model.pc9();
    t.model.colorwayName();
  },
});

export const ProductList = objectType({
  name: "ProductList",
  definition: (t) => {
    t.model.id();
    t.model.title();

    t.connectionField("products", {
      type: Product,
      resolve: async ({ id }, args, { prisma }) => {
        const result = await prisma.productInProductList.findMany({
          where: { productListId: { equals: id } },
          select: { product: true, exclusive: true },
        });

        const connection = connectionFromArray(result, args);

        return {
          ...connection,
          edges: connection.edges.map((_) => ({
            ..._,
            node: _.node.product,
            ...omit(_.node, "product"),
          })),
        };
      },
      extendEdge: (t) => {
        t.string("exclusive", { resolve: (root) => root["exclusive"] });
      },
    });
  },
});

export const ProductInProductList = objectType({
  name: "ProductInProductList",
  definition: (t) => {
    t.model.id();
    t.model.exclusive();
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
