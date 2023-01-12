#!/usr/bin/env zx

$`yarn start:db`;

await $`yarn generate`;

await $`wait-on tcp:5432`;
await sleep(500);

await $`yarn prisma migrate reset --force`;
await $`ts-node --esm prisma/seed-script.ts`;

$`yarn start:dev-server`;

$`relay-compiler --watch`;
