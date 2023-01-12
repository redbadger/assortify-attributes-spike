import { toGlobalId } from "graphql-relay";
import { objectType, queryType } from "nexus";
import "./__generated__/nexus.js";

export const Product = objectType({
  name: "Product",
  definition: (t) => {
    t.id("id", { resolve: ({ id }: any) => toGlobalId("Product", id) });
    t.model.id({ alias: "ownId" });
    t.model.pc9();
    t.model.colorwayName();
  },
});

export const Query = queryType({
  definition: (t) => {
    t.crud.product();
    t.crud.products({ filtering: true });
  },
});
