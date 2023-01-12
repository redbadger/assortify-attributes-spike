import nexus from "nexus";
import { nexusSchemaPrisma } from "nexus-plugin-prisma/schema.js";
import path from "path";
import * as schemaTypes from "./schemaTypes.js";

const schema = nexus.makeSchema({
  types: Object.values(schemaTypes),
  nonNullDefaults: { output: true },
  plugins: [
    nexusSchemaPrisma({
      experimentalCRUD: true,
      // See https://github.com/graphql-nexus/nexus-plugin-prisma/issues/531
      outputs: {
        typegen: path.join(
          process.cwd(),
          "./src/server/__generated__/typegen-nexus-plugin-prisma.d.ts"
        ),
      },
    }),
    nexus.connectionPlugin(),
  ],
  outputs: {
    schema: path.join(
      process.cwd(),
      "./src/server/__generated__/schema.graphql"
    ),
    typegen: path.join(process.cwd(), "./src/server/__generated__/nexus.ts"),
  },
  contextType: {
    module: path.join(process.cwd(), "./src/server/context.ts"),
    export: "Context",
  },
});

export default schema;
