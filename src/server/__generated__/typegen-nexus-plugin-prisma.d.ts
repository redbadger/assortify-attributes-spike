import * as Typegen from 'nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
    first?: boolean
    last?: boolean
    before?: boolean
    after?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'No custom scalars are used in your Prisma Schema.'

// Prisma model type definitions
interface PrismaModels {
  Product: Prisma.Product
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    products: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'pc9' | 'colorwayName'
      ordering: 'id' | 'pc9' | 'colorwayName'
    }
  },
  Product: {

  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    product: 'Product'
    products: 'Product'
  },
  Mutation: {
    createOneProduct: 'Product'
    updateOneProduct: 'Product'
    updateManyProduct: 'AffectedRowsOutput'
    deleteOneProduct: 'Product'
    deleteManyProduct: 'AffectedRowsOutput'
    upsertOneProduct: 'Product'
  },
  Product: {
    id: 'Int'
    pc9: 'String'
    colorwayName: 'String'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  Product: Typegen.NexusPrismaFields<'Product'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  