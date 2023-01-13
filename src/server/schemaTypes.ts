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

export const ProductInProductList = objectType({
  name: "ProductInProductList",
  definition: (t) => {
    t.model.id();
    t.model.exclusive();
  },
});

export const ProductListProduct = objectType({
  name: "ProductListProduct",
  definition: (t) => {
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
      nodes: async ({ id }, _args, { prisma }) => {
        const result = await prisma.productInProductList.findMany({
          where: { productListId: { equals: id } },
          select: { product: true, exclusive: true, id: true },
        });

        const output = result.map((_) => ({
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
  },
});
