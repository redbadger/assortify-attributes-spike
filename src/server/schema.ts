import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import type PrismaTypes from "@pothos/plugin-prisma/generated";
import RelayPlugin from "@pothos/plugin-relay";
import { PrismaClient } from "@prisma/client";
import { writeFileSync } from "fs";
import { lexicographicSortSchema, printSchema } from "graphql";

const isProd = process.env.NODE_ENV === "production";

const prisma = new PrismaClient({});

const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
}>({
  plugins: [PrismaPlugin, RelayPlugin],
  prisma: {
    client: prisma,
  },
  relayOptions: {
    clientMutationId: "omit",
    cursorType: "String",
  },
});

builder.prismaObject("User", {
  fields: (t) => ({
    id: t.exposeString("id"),
    todos: t.relatedConnection("todos", {
      cursor: "id",
      totalCount: true,
    }),
  }),
});

builder.prismaObject("Todo", {
  fields: (t) => ({
    id: t.exposeID("id"),
    text: t.exposeString("text"),
    completed: t.exposeBoolean("completed"),
    createdat: t.string({
      resolve: ({ createdat }) => createdat.toISOString(),
    }),
  }),
});

builder.queryType({
  fields: (t) => ({
    viewer: t.prismaField({
      type: "User",
      resolve: async (query) =>
        prisma.user.findUniqueOrThrow({
          ...query,
          where: { id: "parklife" },
        }),
    }),
  }),
});

const schema = builder.toSchema({});

if (!isProd) {
  const schemaAsString = printSchema(lexicographicSortSchema(schema));

  writeFileSync("src/server/__generated__/schema.graphql", schemaAsString);
}

export default schema;
