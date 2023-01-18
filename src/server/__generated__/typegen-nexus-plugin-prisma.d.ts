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
  Channel: Prisma.Channel
  ChannelInProductList: Prisma.ChannelInProductList
  Distribution: Prisma.Distribution
  DistributionForProductInProductList: Prisma.DistributionForProductInProductList
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    products: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'pc9' | 'colorwayName' | 'productLists'
      ordering: 'id' | 'pc9' | 'colorwayName'
    }
    productLists: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'products' | 'channels'
      ordering: 'id' | 'title'
    }
    productInProductLists: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'product' | 'productId' | 'productList' | 'productListId' | 'exclusive' | 'exclusiveComments' | 'minimumOrderQuantity' | 'productLifecycleGroupName' | 'productLifecycleGroup' | 'distributions'
      ordering: 'id' | 'productId' | 'productListId' | 'exclusive' | 'exclusiveComments' | 'minimumOrderQuantity' | 'productLifecycleGroupName'
    }
    productLifecycleGroups: {
      filtering: 'AND' | 'OR' | 'NOT' | 'name' | 'displayName' | 'ProductInProductList'
      ordering: 'name' | 'displayName'
    }
    channels: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'productLists' | 'distributions'
      ordering: 'id' | 'name'
    }
    channelInProductLists: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'channel' | 'channelId' | 'productList' | 'productListId'
      ordering: 'id' | 'channelId' | 'productListId'
    }
    distributions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'channel' | 'channelId' | 'productInProductLists'
      ordering: 'id' | 'name' | 'channelId'
    }
    distributionForProductInProductLists: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'distribution' | 'distributionId' | 'productInProductList' | 'productInProductListId'
      ordering: 'id' | 'distributionId' | 'productInProductListId'
    }
  },
  Product: {
    productLists: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'product' | 'productId' | 'productList' | 'productListId' | 'exclusive' | 'exclusiveComments' | 'minimumOrderQuantity' | 'productLifecycleGroupName' | 'productLifecycleGroup' | 'distributions'
      ordering: 'id' | 'productId' | 'productListId' | 'exclusive' | 'exclusiveComments' | 'minimumOrderQuantity' | 'productLifecycleGroupName'
    }
  }
  ProductList: {
    products: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'product' | 'productId' | 'productList' | 'productListId' | 'exclusive' | 'exclusiveComments' | 'minimumOrderQuantity' | 'productLifecycleGroupName' | 'productLifecycleGroup' | 'distributions'
      ordering: 'id' | 'productId' | 'productListId' | 'exclusive' | 'exclusiveComments' | 'minimumOrderQuantity' | 'productLifecycleGroupName'
    }
    channels: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'channel' | 'channelId' | 'productList' | 'productListId'
      ordering: 'id' | 'channelId' | 'productListId'
    }
  }
  ProductInProductList: {
    distributions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'distribution' | 'distributionId' | 'productInProductList' | 'productInProductListId'
      ordering: 'id' | 'distributionId' | 'productInProductListId'
    }
  }
  ProductLifecycleGroup: {
    ProductInProductList: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'product' | 'productId' | 'productList' | 'productListId' | 'exclusive' | 'exclusiveComments' | 'minimumOrderQuantity' | 'productLifecycleGroupName' | 'productLifecycleGroup' | 'distributions'
      ordering: 'id' | 'productId' | 'productListId' | 'exclusive' | 'exclusiveComments' | 'minimumOrderQuantity' | 'productLifecycleGroupName'
    }
  }
  Channel: {
    productLists: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'channel' | 'channelId' | 'productList' | 'productListId'
      ordering: 'id' | 'channelId' | 'productListId'
    }
    distributions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'channel' | 'channelId' | 'productInProductLists'
      ordering: 'id' | 'name' | 'channelId'
    }
  }
  ChannelInProductList: {

  }
  Distribution: {
    productInProductLists: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'distribution' | 'distributionId' | 'productInProductList' | 'productInProductListId'
      ordering: 'id' | 'distributionId' | 'productInProductListId'
    }
  }
  DistributionForProductInProductList: {

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
    channel: 'Channel'
    channels: 'Channel'
    channelInProductList: 'ChannelInProductList'
    channelInProductLists: 'ChannelInProductList'
    distribution: 'Distribution'
    distributions: 'Distribution'
    distributionForProductInProductList: 'DistributionForProductInProductList'
    distributionForProductInProductLists: 'DistributionForProductInProductList'
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
    createOneChannel: 'Channel'
    updateOneChannel: 'Channel'
    updateManyChannel: 'AffectedRowsOutput'
    deleteOneChannel: 'Channel'
    deleteManyChannel: 'AffectedRowsOutput'
    upsertOneChannel: 'Channel'
    createOneChannelInProductList: 'ChannelInProductList'
    updateOneChannelInProductList: 'ChannelInProductList'
    updateManyChannelInProductList: 'AffectedRowsOutput'
    deleteOneChannelInProductList: 'ChannelInProductList'
    deleteManyChannelInProductList: 'AffectedRowsOutput'
    upsertOneChannelInProductList: 'ChannelInProductList'
    createOneDistribution: 'Distribution'
    updateOneDistribution: 'Distribution'
    updateManyDistribution: 'AffectedRowsOutput'
    deleteOneDistribution: 'Distribution'
    deleteManyDistribution: 'AffectedRowsOutput'
    upsertOneDistribution: 'Distribution'
    createOneDistributionForProductInProductList: 'DistributionForProductInProductList'
    updateOneDistributionForProductInProductList: 'DistributionForProductInProductList'
    updateManyDistributionForProductInProductList: 'AffectedRowsOutput'
    deleteOneDistributionForProductInProductList: 'DistributionForProductInProductList'
    deleteManyDistributionForProductInProductList: 'AffectedRowsOutput'
    upsertOneDistributionForProductInProductList: 'DistributionForProductInProductList'
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
    channels: 'ChannelInProductList'
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
    distributions: 'DistributionForProductInProductList'
  }
  ProductLifecycleGroup: {
    name: 'String'
    displayName: 'String'
    ProductInProductList: 'ProductInProductList'
  }
  Channel: {
    id: 'Int'
    name: 'String'
    productLists: 'ChannelInProductList'
    distributions: 'Distribution'
  }
  ChannelInProductList: {
    id: 'Int'
    channel: 'Channel'
    channelId: 'Int'
    productList: 'ProductList'
    productListId: 'Int'
  }
  Distribution: {
    id: 'Int'
    name: 'String'
    channel: 'Channel'
    channelId: 'Int'
    productInProductLists: 'DistributionForProductInProductList'
  }
  DistributionForProductInProductList: {
    id: 'Int'
    distribution: 'Distribution'
    distributionId: 'Int'
    productInProductList: 'ProductInProductList'
    productInProductListId: 'Int'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  Product: Typegen.NexusPrismaFields<'Product'>
  ProductList: Typegen.NexusPrismaFields<'ProductList'>
  ProductInProductList: Typegen.NexusPrismaFields<'ProductInProductList'>
  ProductLifecycleGroup: Typegen.NexusPrismaFields<'ProductLifecycleGroup'>
  Channel: Typegen.NexusPrismaFields<'Channel'>
  ChannelInProductList: Typegen.NexusPrismaFields<'ChannelInProductList'>
  Distribution: Typegen.NexusPrismaFields<'Distribution'>
  DistributionForProductInProductList: Typegen.NexusPrismaFields<'DistributionForProductInProductList'>
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
  