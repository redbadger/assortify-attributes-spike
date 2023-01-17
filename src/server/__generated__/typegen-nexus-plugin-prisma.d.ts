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
  ProductList: Prisma.ProductList
  ProductInProductList: Prisma.ProductInProductList
  ProductLifecycleGroup: Prisma.ProductLifecycleGroup
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    products: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'pc9' | 'colorwayName' | 'productLists'
      ordering: 'id' | 'pc9' | 'colorwayName'
    }
    productLists: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'products'
      ordering: 'id' | 'title'
    }
    productInProductLists: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'product' | 'productId' | 'productList' | 'productListId' | 'exclusive' | 'exclusiveComments' | 'minimumOrderQuantity' | 'productLifecycleGroupName' | 'productLifecycleGroup'
      ordering: 'id' | 'productId' | 'productListId' | 'exclusive' | 'exclusiveComments' | 'minimumOrderQuantity' | 'productLifecycleGroupName'
    }
    productLifecycleGroups: {
      filtering: 'AND' | 'OR' | 'NOT' | 'name' | 'displayName' | 'ProductInProductList'
      ordering: 'name' | 'displayName'
    }
  },
  Product: {
    productLists: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'product' | 'productId' | 'productList' | 'productListId' | 'exclusive' | 'exclusiveComments' | 'minimumOrderQuantity' | 'productLifecycleGroupName' | 'productLifecycleGroup'
      ordering: 'id' | 'productId' | 'productListId' | 'exclusive' | 'exclusiveComments' | 'minimumOrderQuantity' | 'productLifecycleGroupName'
    }
  }
  ProductList: {
    products: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'product' | 'productId' | 'productList' | 'productListId' | 'exclusive' | 'exclusiveComments' | 'minimumOrderQuantity' | 'productLifecycleGroupName' | 'productLifecycleGroup'
      ordering: 'id' | 'productId' | 'productListId' | 'exclusive' | 'exclusiveComments' | 'minimumOrderQuantity' | 'productLifecycleGroupName'
    }
  }
  ProductInProductList: {

  }
  ProductLifecycleGroup: {
    ProductInProductList: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'product' | 'productId' | 'productList' | 'productListId' | 'exclusive' | 'exclusiveComments' | 'minimumOrderQuantity' | 'productLifecycleGroupName' | 'productLifecycleGroup'
      ordering: 'id' | 'productId' | 'productListId' | 'exclusive' | 'exclusiveComments' | 'minimumOrderQuantity' | 'productLifecycleGroupName'
    }
  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    product: 'Product'
    products: 'Product'
    productList: 'ProductList'
    productLists: 'ProductList'
    productInProductList: 'ProductInProductList'
    productInProductLists: 'ProductInProductList'
    productLifecycleGroup: 'ProductLifecycleGroup'
    productLifecycleGroups: 'ProductLifecycleGroup'
  },
  Mutation: {
    createOneProduct: 'Product'
    updateOneProduct: 'Product'
    updateManyProduct: 'AffectedRowsOutput'
    deleteOneProduct: 'Product'
    deleteManyProduct: 'AffectedRowsOutput'
    upsertOneProduct: 'Product'
    createOneProductList: 'ProductList'
    updateOneProductList: 'ProductList'
    updateManyProductList: 'AffectedRowsOutput'
    deleteOneProductList: 'ProductList'
    deleteManyProductList: 'AffectedRowsOutput'
    upsertOneProductList: 'ProductList'
    createOneProductInProductList: 'ProductInProductList'
    updateOneProductInProductList: 'ProductInProductList'
    updateManyProductInProductList: 'AffectedRowsOutput'
    deleteOneProductInProductList: 'ProductInProductList'
    deleteManyProductInProductList: 'AffectedRowsOutput'
    upsertOneProductInProductList: 'ProductInProductList'
    createOneProductLifecycleGroup: 'ProductLifecycleGroup'
    updateOneProductLifecycleGroup: 'ProductLifecycleGroup'
    updateManyProductLifecycleGroup: 'AffectedRowsOutput'
    deleteOneProductLifecycleGroup: 'ProductLifecycleGroup'
    deleteManyProductLifecycleGroup: 'AffectedRowsOutput'
    upsertOneProductLifecycleGroup: 'ProductLifecycleGroup'
  },
  Product: {
    id: 'Int'
    pc9: 'String'
    colorwayName: 'String'
    productLists: 'ProductInProductList'
  }
  ProductList: {
    id: 'Int'
    title: 'String'
    products: 'ProductInProductList'
  }
  ProductInProductList: {
    id: 'Int'
    product: 'Product'
    productId: 'Int'
    productList: 'ProductList'
    productListId: 'Int'
    exclusive: 'String'
    exclusiveComments: 'String'
    minimumOrderQuantity: 'Int'
    productLifecycleGroupName: 'String'
    productLifecycleGroup: 'ProductLifecycleGroup'
  }
  ProductLifecycleGroup: {
    name: 'String'
    displayName: 'String'
    ProductInProductList: 'ProductInProductList'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  Product: Typegen.NexusPrismaFields<'Product'>
  ProductList: Typegen.NexusPrismaFields<'ProductList'>
  ProductInProductList: Typegen.NexusPrismaFields<'ProductInProductList'>
  ProductLifecycleGroup: Typegen.NexusPrismaFields<'ProductLifecycleGroup'>
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
  