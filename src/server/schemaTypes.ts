import { PrismaSelect } from "@paljs/plugins";
import prismaModule from "@prisma/client";
import { connectionFromArray } from "graphql-relay";
import { omit, pick } from "lodash-es";
import { objectType, queryType, unionType } from "nexus";
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

// export const ProductListProduct = unionType({
//   name: "ProductListProduct",
//   definition: (t) => {
//     t.members("Product", "ProductInProductList");
//   },
//   resolveType: (item) =>
//     "pc9" in item ? Product.name : ProductInProductList.name,
// });

export const ProductList = objectType({
  name: "ProductList",
  definition: (t) => {
    t.model.id();
    t.model.title();

    t.connectionField("productListProductConnection", {
      type: ProductListProduct,
      nodes: async ({ id }, _args, { prisma }, info) => {
        const select = new PrismaSelect(info).value;

        const productFieldNames = Object.keys(
          select.select.edges.select.node.select.product.select
        );

        const productInProductListFieldNames = Object.keys(
          select.select.edges.select.node.select.productInProductList.select
        );

        console.log(productFieldNames, productInProductListFieldNames);

        // console.log(
        //   prismaModule.Prisma.sql`${[
        //     ...productFieldNames,
        //     ...productInProductListFieldNames,
        //   ]
        //     .map((_) => `"${_}"`)
        //     .join(", ")}`
        // );

        const rawResult = await prisma.$queryRaw`
          SELECT
            j.id jid,
            p.id pid,
            *
          FROM
            "ProductInProductList" j
          INNER JOIN "Product" p
            ON p.id = j."productId"
          WHERE "productListId" = ${id}
        `;

        console.log(rawResult);

        const rawOutput = rawResult.map((_) => ({
          product: { ...pick(_, productFieldNames), id: _.pid },
          productInProductList: {
            ...pick(_, productInProductListFieldNames),
            id: _.jid,
          },
        }));

        console.log(rawOutput);

        return rawOutput;
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
