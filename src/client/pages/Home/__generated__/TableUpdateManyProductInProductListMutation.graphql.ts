/**
 * @generated SignedSource<<eb52c3318abd524df8ec2b64b318259b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type QueryMode = "default" | "insensitive" | "%future added value";
export type ProductInProductListUpdateRowInput = {
  data: ProductInProductListUpdateInput;
  where: ProductInProductListWhereUniqueInput;
};
export type ProductInProductListUpdateInput = {
  distributions?: DistributionForProductInProductListUpdateManyWithoutProductInProductListInput | null;
  exclusive?: NullableStringFieldUpdateOperationsInput | null;
  exclusiveComments?: NullableStringFieldUpdateOperationsInput | null;
  minimumOrderQuantity?: NullableIntFieldUpdateOperationsInput | null;
  product?: ProductUpdateOneRequiredWithoutProductListsInput | null;
  productLifecycleGroup?: ProductLifecycleGroupUpdateOneWithoutProductInProductListInput | null;
  productList?: ProductListUpdateOneRequiredWithoutProductsInput | null;
};
export type DistributionForProductInProductListUpdateManyWithoutProductInProductListInput = {
  connect?: ReadonlyArray<DistributionForProductInProductListWhereUniqueInput> | null;
  connectOrCreate?: ReadonlyArray<DistributionForProductInProductListCreateOrConnectWithoutProductInProductListInput> | null;
  create?: ReadonlyArray<DistributionForProductInProductListCreateWithoutProductInProductListInput> | null;
  createMany?: DistributionForProductInProductListCreateManyProductInProductListInputEnvelope | null;
  delete?: ReadonlyArray<DistributionForProductInProductListWhereUniqueInput> | null;
  deleteMany?: ReadonlyArray<DistributionForProductInProductListScalarWhereInput> | null;
  disconnect?: ReadonlyArray<DistributionForProductInProductListWhereUniqueInput> | null;
  set?: ReadonlyArray<DistributionForProductInProductListWhereUniqueInput> | null;
  update?: ReadonlyArray<DistributionForProductInProductListUpdateWithWhereUniqueWithoutProductInProductListInput> | null;
  updateMany?: ReadonlyArray<DistributionForProductInProductListUpdateManyWithWhereWithoutProductInProductListInput> | null;
  upsert?: ReadonlyArray<DistributionForProductInProductListUpsertWithWhereUniqueWithoutProductInProductListInput> | null;
};
export type DistributionForProductInProductListWhereUniqueInput = {
  distributionId_productInProductListId?: DistributionForProductInProductListDistributionIdProductInProductListIdCompoundUniqueInput | null;
  id?: number | null;
};
export type DistributionForProductInProductListDistributionIdProductInProductListIdCompoundUniqueInput = {
  distributionId: number;
  productInProductListId: number;
};
export type DistributionForProductInProductListCreateOrConnectWithoutProductInProductListInput = {
  create: DistributionForProductInProductListCreateWithoutProductInProductListInput;
  where: DistributionForProductInProductListWhereUniqueInput;
};
export type DistributionForProductInProductListCreateWithoutProductInProductListInput = {
  distribution: DistributionCreateNestedOneWithoutProductInProductListsInput;
};
export type DistributionCreateNestedOneWithoutProductInProductListsInput = {
  connect?: DistributionWhereUniqueInput | null;
  connectOrCreate?: DistributionCreateOrConnectWithoutProductInProductListsInput | null;
  create?: DistributionCreateWithoutProductInProductListsInput | null;
};
export type DistributionWhereUniqueInput = {
  id?: number | null;
  name?: string | null;
  name_channelId?: DistributionNameChannelIdCompoundUniqueInput | null;
};
export type DistributionNameChannelIdCompoundUniqueInput = {
  channelId: number;
  name: string;
};
export type DistributionCreateOrConnectWithoutProductInProductListsInput = {
  create: DistributionCreateWithoutProductInProductListsInput;
  where: DistributionWhereUniqueInput;
};
export type DistributionCreateWithoutProductInProductListsInput = {
  channel: ChannelCreateNestedOneWithoutDistributionInput;
  name: string;
};
export type ChannelCreateNestedOneWithoutDistributionInput = {
  connect?: ChannelWhereUniqueInput | null;
  connectOrCreate?: ChannelCreateOrConnectWithoutDistributionInput | null;
  create?: ChannelCreateWithoutDistributionInput | null;
};
export type ChannelWhereUniqueInput = {
  id?: number | null;
  name?: string | null;
};
export type ChannelCreateOrConnectWithoutDistributionInput = {
  create: ChannelCreateWithoutDistributionInput;
  where: ChannelWhereUniqueInput;
};
export type ChannelCreateWithoutDistributionInput = {
  name: string;
  productLists?: ChannelInProductListCreateNestedManyWithoutChannelInput | null;
};
export type ChannelInProductListCreateNestedManyWithoutChannelInput = {
  connect?: ReadonlyArray<ChannelInProductListWhereUniqueInput> | null;
  connectOrCreate?: ReadonlyArray<ChannelInProductListCreateOrConnectWithoutChannelInput> | null;
  create?: ReadonlyArray<ChannelInProductListCreateWithoutChannelInput> | null;
  createMany?: ChannelInProductListCreateManyChannelInputEnvelope | null;
};
export type ChannelInProductListWhereUniqueInput = {
  channelId_productListId?: ChannelInProductListChannelIdProductListIdCompoundUniqueInput | null;
  id?: number | null;
};
export type ChannelInProductListChannelIdProductListIdCompoundUniqueInput = {
  channelId: number;
  productListId: number;
};
export type ChannelInProductListCreateOrConnectWithoutChannelInput = {
  create: ChannelInProductListCreateWithoutChannelInput;
  where: ChannelInProductListWhereUniqueInput;
};
export type ChannelInProductListCreateWithoutChannelInput = {
  productList: ProductListCreateNestedOneWithoutChannelsInput;
};
export type ProductListCreateNestedOneWithoutChannelsInput = {
  connect?: ProductListWhereUniqueInput | null;
  connectOrCreate?: ProductListCreateOrConnectWithoutChannelsInput | null;
  create?: ProductListCreateWithoutChannelsInput | null;
};
export type ProductListWhereUniqueInput = {
  id?: number | null;
};
export type ProductListCreateOrConnectWithoutChannelsInput = {
  create: ProductListCreateWithoutChannelsInput;
  where: ProductListWhereUniqueInput;
};
export type ProductListCreateWithoutChannelsInput = {
  products?: ProductInProductListCreateNestedManyWithoutProductListInput | null;
  title: string;
};
export type ProductInProductListCreateNestedManyWithoutProductListInput = {
  connect?: ReadonlyArray<ProductInProductListWhereUniqueInput> | null;
  connectOrCreate?: ReadonlyArray<ProductInProductListCreateOrConnectWithoutProductListInput> | null;
  create?: ReadonlyArray<ProductInProductListCreateWithoutProductListInput> | null;
  createMany?: ProductInProductListCreateManyProductListInputEnvelope | null;
};
export type ProductInProductListWhereUniqueInput = {
  id?: number | null;
  productId_productListId?: ProductInProductListProductIdProductListIdCompoundUniqueInput | null;
};
export type ProductInProductListProductIdProductListIdCompoundUniqueInput = {
  productId: number;
  productListId: number;
};
export type ProductInProductListCreateOrConnectWithoutProductListInput = {
  create: ProductInProductListCreateWithoutProductListInput;
  where: ProductInProductListWhereUniqueInput;
};
export type ProductInProductListCreateWithoutProductListInput = {
  distributions?: DistributionForProductInProductListCreateNestedManyWithoutProductInProductListInput | null;
  exclusive?: string | null;
  exclusiveComments?: string | null;
  minimumOrderQuantity?: number | null;
  product: ProductCreateNestedOneWithoutProductListsInput;
  productLifecycleGroup?: ProductLifecycleGroupCreateNestedOneWithoutProductInProductListInput | null;
};
export type DistributionForProductInProductListCreateNestedManyWithoutProductInProductListInput = {
  connect?: ReadonlyArray<DistributionForProductInProductListWhereUniqueInput> | null;
  connectOrCreate?: ReadonlyArray<DistributionForProductInProductListCreateOrConnectWithoutProductInProductListInput> | null;
  create?: ReadonlyArray<DistributionForProductInProductListCreateWithoutProductInProductListInput> | null;
  createMany?: DistributionForProductInProductListCreateManyProductInProductListInputEnvelope | null;
};
export type DistributionForProductInProductListCreateManyProductInProductListInputEnvelope = {
  data?: ReadonlyArray<DistributionForProductInProductListCreateManyProductInProductListInput> | null;
  skipDuplicates?: boolean | null;
};
export type DistributionForProductInProductListCreateManyProductInProductListInput = {
  distributionId: number;
  id?: number | null;
};
export type ProductCreateNestedOneWithoutProductListsInput = {
  connect?: ProductWhereUniqueInput | null;
  connectOrCreate?: ProductCreateOrConnectWithoutProductListsInput | null;
  create?: ProductCreateWithoutProductListsInput | null;
};
export type ProductWhereUniqueInput = {
  id?: number | null;
};
export type ProductCreateOrConnectWithoutProductListsInput = {
  create: ProductCreateWithoutProductListsInput;
  where: ProductWhereUniqueInput;
};
export type ProductCreateWithoutProductListsInput = {
  colorwayName: string;
  pc9: string;
};
export type ProductLifecycleGroupCreateNestedOneWithoutProductInProductListInput = {
  connect?: ProductLifecycleGroupWhereUniqueInput | null;
  connectOrCreate?: ProductLifecycleGroupCreateOrConnectWithoutProductInProductListInput | null;
  create?: ProductLifecycleGroupCreateWithoutProductInProductListInput | null;
};
export type ProductLifecycleGroupWhereUniqueInput = {
  displayName?: string | null;
  name?: string | null;
};
export type ProductLifecycleGroupCreateOrConnectWithoutProductInProductListInput = {
  create: ProductLifecycleGroupCreateWithoutProductInProductListInput;
  where: ProductLifecycleGroupWhereUniqueInput;
};
export type ProductLifecycleGroupCreateWithoutProductInProductListInput = {
  displayName: string;
  name: string;
};
export type ProductInProductListCreateManyProductListInputEnvelope = {
  data?: ReadonlyArray<ProductInProductListCreateManyProductListInput> | null;
  skipDuplicates?: boolean | null;
};
export type ProductInProductListCreateManyProductListInput = {
  exclusive?: string | null;
  exclusiveComments?: string | null;
  id?: number | null;
  minimumOrderQuantity?: number | null;
  productId: number;
  productLifecycleGroupName?: string | null;
};
export type ChannelInProductListCreateManyChannelInputEnvelope = {
  data?: ReadonlyArray<ChannelInProductListCreateManyChannelInput> | null;
  skipDuplicates?: boolean | null;
};
export type ChannelInProductListCreateManyChannelInput = {
  id?: number | null;
  productListId: number;
};
export type DistributionForProductInProductListScalarWhereInput = {
  AND?: ReadonlyArray<DistributionForProductInProductListScalarWhereInput> | null;
  NOT?: ReadonlyArray<DistributionForProductInProductListScalarWhereInput> | null;
  OR?: ReadonlyArray<DistributionForProductInProductListScalarWhereInput> | null;
  distributionId?: IntFilter | null;
  id?: IntFilter | null;
  productInProductListId?: IntFilter | null;
};
export type IntFilter = {
  equals?: number | null;
  gt?: number | null;
  gte?: number | null;
  in?: ReadonlyArray<number> | null;
  lt?: number | null;
  lte?: number | null;
  not?: NestedIntFilter | null;
  notIn?: ReadonlyArray<number> | null;
};
export type NestedIntFilter = {
  equals?: number | null;
  gt?: number | null;
  gte?: number | null;
  in?: ReadonlyArray<number> | null;
  lt?: number | null;
  lte?: number | null;
  not?: NestedIntFilter | null;
  notIn?: ReadonlyArray<number> | null;
};
export type DistributionForProductInProductListUpdateWithWhereUniqueWithoutProductInProductListInput = {
  data: DistributionForProductInProductListUpdateWithoutProductInProductListInput;
  where: DistributionForProductInProductListWhereUniqueInput;
};
export type DistributionForProductInProductListUpdateWithoutProductInProductListInput = {
  distribution?: DistributionUpdateOneRequiredWithoutProductInProductListsInput | null;
};
export type DistributionUpdateOneRequiredWithoutProductInProductListsInput = {
  connect?: DistributionWhereUniqueInput | null;
  connectOrCreate?: DistributionCreateOrConnectWithoutProductInProductListsInput | null;
  create?: DistributionCreateWithoutProductInProductListsInput | null;
  update?: DistributionUpdateWithoutProductInProductListsInput | null;
  upsert?: DistributionUpsertWithoutProductInProductListsInput | null;
};
export type DistributionUpdateWithoutProductInProductListsInput = {
  channel?: ChannelUpdateOneRequiredWithoutDistributionInput | null;
  name?: StringFieldUpdateOperationsInput | null;
};
export type ChannelUpdateOneRequiredWithoutDistributionInput = {
  connect?: ChannelWhereUniqueInput | null;
  connectOrCreate?: ChannelCreateOrConnectWithoutDistributionInput | null;
  create?: ChannelCreateWithoutDistributionInput | null;
  update?: ChannelUpdateWithoutDistributionInput | null;
  upsert?: ChannelUpsertWithoutDistributionInput | null;
};
export type ChannelUpdateWithoutDistributionInput = {
  name?: StringFieldUpdateOperationsInput | null;
  productLists?: ChannelInProductListUpdateManyWithoutChannelInput | null;
};
export type StringFieldUpdateOperationsInput = {
  set?: string | null;
};
export type ChannelInProductListUpdateManyWithoutChannelInput = {
  connect?: ReadonlyArray<ChannelInProductListWhereUniqueInput> | null;
  connectOrCreate?: ReadonlyArray<ChannelInProductListCreateOrConnectWithoutChannelInput> | null;
  create?: ReadonlyArray<ChannelInProductListCreateWithoutChannelInput> | null;
  createMany?: ChannelInProductListCreateManyChannelInputEnvelope | null;
  delete?: ReadonlyArray<ChannelInProductListWhereUniqueInput> | null;
  deleteMany?: ReadonlyArray<ChannelInProductListScalarWhereInput> | null;
  disconnect?: ReadonlyArray<ChannelInProductListWhereUniqueInput> | null;
  set?: ReadonlyArray<ChannelInProductListWhereUniqueInput> | null;
  update?: ReadonlyArray<ChannelInProductListUpdateWithWhereUniqueWithoutChannelInput> | null;
  updateMany?: ReadonlyArray<ChannelInProductListUpdateManyWithWhereWithoutChannelInput> | null;
  upsert?: ReadonlyArray<ChannelInProductListUpsertWithWhereUniqueWithoutChannelInput> | null;
};
export type ChannelInProductListScalarWhereInput = {
  AND?: ReadonlyArray<ChannelInProductListScalarWhereInput> | null;
  NOT?: ReadonlyArray<ChannelInProductListScalarWhereInput> | null;
  OR?: ReadonlyArray<ChannelInProductListScalarWhereInput> | null;
  channelId?: IntFilter | null;
  id?: IntFilter | null;
  productListId?: IntFilter | null;
};
export type ChannelInProductListUpdateWithWhereUniqueWithoutChannelInput = {
  data: ChannelInProductListUpdateWithoutChannelInput;
  where: ChannelInProductListWhereUniqueInput;
};
export type ChannelInProductListUpdateWithoutChannelInput = {
  productList?: ProductListUpdateOneRequiredWithoutChannelsInput | null;
};
export type ProductListUpdateOneRequiredWithoutChannelsInput = {
  connect?: ProductListWhereUniqueInput | null;
  connectOrCreate?: ProductListCreateOrConnectWithoutChannelsInput | null;
  create?: ProductListCreateWithoutChannelsInput | null;
  update?: ProductListUpdateWithoutChannelsInput | null;
  upsert?: ProductListUpsertWithoutChannelsInput | null;
};
export type ProductListUpdateWithoutChannelsInput = {
  products?: ProductInProductListUpdateManyWithoutProductListInput | null;
  title?: StringFieldUpdateOperationsInput | null;
};
export type ProductInProductListUpdateManyWithoutProductListInput = {
  connect?: ReadonlyArray<ProductInProductListWhereUniqueInput> | null;
  connectOrCreate?: ReadonlyArray<ProductInProductListCreateOrConnectWithoutProductListInput> | null;
  create?: ReadonlyArray<ProductInProductListCreateWithoutProductListInput> | null;
  createMany?: ProductInProductListCreateManyProductListInputEnvelope | null;
  delete?: ReadonlyArray<ProductInProductListWhereUniqueInput> | null;
  deleteMany?: ReadonlyArray<ProductInProductListScalarWhereInput> | null;
  disconnect?: ReadonlyArray<ProductInProductListWhereUniqueInput> | null;
  set?: ReadonlyArray<ProductInProductListWhereUniqueInput> | null;
  update?: ReadonlyArray<ProductInProductListUpdateWithWhereUniqueWithoutProductListInput> | null;
  updateMany?: ReadonlyArray<ProductInProductListUpdateManyWithWhereWithoutProductListInput> | null;
  upsert?: ReadonlyArray<ProductInProductListUpsertWithWhereUniqueWithoutProductListInput> | null;
};
export type ProductInProductListScalarWhereInput = {
  AND?: ReadonlyArray<ProductInProductListScalarWhereInput> | null;
  NOT?: ReadonlyArray<ProductInProductListScalarWhereInput> | null;
  OR?: ReadonlyArray<ProductInProductListScalarWhereInput> | null;
  exclusive?: StringNullableFilter | null;
  exclusiveComments?: StringNullableFilter | null;
  id?: IntFilter | null;
  minimumOrderQuantity?: IntNullableFilter | null;
  productId?: IntFilter | null;
  productLifecycleGroupName?: StringNullableFilter | null;
  productListId?: IntFilter | null;
};
export type StringNullableFilter = {
  contains?: string | null;
  endsWith?: string | null;
  equals?: string | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string> | null;
  lt?: string | null;
  lte?: string | null;
  mode?: QueryMode | null;
  not?: NestedStringNullableFilter | null;
  notIn?: ReadonlyArray<string> | null;
  startsWith?: string | null;
};
export type NestedStringNullableFilter = {
  contains?: string | null;
  endsWith?: string | null;
  equals?: string | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string> | null;
  lt?: string | null;
  lte?: string | null;
  not?: NestedStringNullableFilter | null;
  notIn?: ReadonlyArray<string> | null;
  startsWith?: string | null;
};
export type IntNullableFilter = {
  equals?: number | null;
  gt?: number | null;
  gte?: number | null;
  in?: ReadonlyArray<number> | null;
  lt?: number | null;
  lte?: number | null;
  not?: NestedIntNullableFilter | null;
  notIn?: ReadonlyArray<number> | null;
};
export type NestedIntNullableFilter = {
  equals?: number | null;
  gt?: number | null;
  gte?: number | null;
  in?: ReadonlyArray<number> | null;
  lt?: number | null;
  lte?: number | null;
  not?: NestedIntNullableFilter | null;
  notIn?: ReadonlyArray<number> | null;
};
export type ProductInProductListUpdateWithWhereUniqueWithoutProductListInput = {
  data: ProductInProductListUpdateWithoutProductListInput;
  where: ProductInProductListWhereUniqueInput;
};
export type ProductInProductListUpdateWithoutProductListInput = {
  distributions?: DistributionForProductInProductListUpdateManyWithoutProductInProductListInput | null;
  exclusive?: NullableStringFieldUpdateOperationsInput | null;
  exclusiveComments?: NullableStringFieldUpdateOperationsInput | null;
  minimumOrderQuantity?: NullableIntFieldUpdateOperationsInput | null;
  product?: ProductUpdateOneRequiredWithoutProductListsInput | null;
  productLifecycleGroup?: ProductLifecycleGroupUpdateOneWithoutProductInProductListInput | null;
};
export type NullableStringFieldUpdateOperationsInput = {
  set?: string | null;
};
export type NullableIntFieldUpdateOperationsInput = {
  decrement?: number | null;
  divide?: number | null;
  increment?: number | null;
  multiply?: number | null;
  set?: number | null;
};
export type ProductUpdateOneRequiredWithoutProductListsInput = {
  connect?: ProductWhereUniqueInput | null;
  connectOrCreate?: ProductCreateOrConnectWithoutProductListsInput | null;
  create?: ProductCreateWithoutProductListsInput | null;
  update?: ProductUpdateWithoutProductListsInput | null;
  upsert?: ProductUpsertWithoutProductListsInput | null;
};
export type ProductUpdateWithoutProductListsInput = {
  colorwayName?: StringFieldUpdateOperationsInput | null;
  pc9?: StringFieldUpdateOperationsInput | null;
};
export type ProductUpsertWithoutProductListsInput = {
  create: ProductCreateWithoutProductListsInput;
  update: ProductUpdateWithoutProductListsInput;
};
export type ProductLifecycleGroupUpdateOneWithoutProductInProductListInput = {
  connect?: ProductLifecycleGroupWhereUniqueInput | null;
  connectOrCreate?: ProductLifecycleGroupCreateOrConnectWithoutProductInProductListInput | null;
  create?: ProductLifecycleGroupCreateWithoutProductInProductListInput | null;
  delete?: boolean | null;
  disconnect?: boolean | null;
  update?: ProductLifecycleGroupUpdateWithoutProductInProductListInput | null;
  upsert?: ProductLifecycleGroupUpsertWithoutProductInProductListInput | null;
};
export type ProductLifecycleGroupUpdateWithoutProductInProductListInput = {
  displayName?: StringFieldUpdateOperationsInput | null;
  name?: StringFieldUpdateOperationsInput | null;
};
export type ProductLifecycleGroupUpsertWithoutProductInProductListInput = {
  create: ProductLifecycleGroupCreateWithoutProductInProductListInput;
  update: ProductLifecycleGroupUpdateWithoutProductInProductListInput;
};
export type ProductInProductListUpdateManyWithWhereWithoutProductListInput = {
  data: ProductInProductListUpdateManyMutationInput;
  where: ProductInProductListScalarWhereInput;
};
export type ProductInProductListUpdateManyMutationInput = {
  exclusive?: NullableStringFieldUpdateOperationsInput | null;
  exclusiveComments?: NullableStringFieldUpdateOperationsInput | null;
  minimumOrderQuantity?: NullableIntFieldUpdateOperationsInput | null;
};
export type ProductInProductListUpsertWithWhereUniqueWithoutProductListInput = {
  create: ProductInProductListCreateWithoutProductListInput;
  update: ProductInProductListUpdateWithoutProductListInput;
  where: ProductInProductListWhereUniqueInput;
};
export type ProductListUpsertWithoutChannelsInput = {
  create: ProductListCreateWithoutChannelsInput;
  update: ProductListUpdateWithoutChannelsInput;
};
export type ChannelInProductListUpdateManyWithWhereWithoutChannelInput = {
  data: ChannelInProductListUpdateManyMutationInput;
  where: ChannelInProductListScalarWhereInput;
};
export type ChannelInProductListUpdateManyMutationInput = {
  _dummy_field?: number | null;
};
export type ChannelInProductListUpsertWithWhereUniqueWithoutChannelInput = {
  create: ChannelInProductListCreateWithoutChannelInput;
  update: ChannelInProductListUpdateWithoutChannelInput;
  where: ChannelInProductListWhereUniqueInput;
};
export type ChannelUpsertWithoutDistributionInput = {
  create: ChannelCreateWithoutDistributionInput;
  update: ChannelUpdateWithoutDistributionInput;
};
export type DistributionUpsertWithoutProductInProductListsInput = {
  create: DistributionCreateWithoutProductInProductListsInput;
  update: DistributionUpdateWithoutProductInProductListsInput;
};
export type DistributionForProductInProductListUpdateManyWithWhereWithoutProductInProductListInput = {
  data: DistributionForProductInProductListUpdateManyMutationInput;
  where: DistributionForProductInProductListScalarWhereInput;
};
export type DistributionForProductInProductListUpdateManyMutationInput = {
  _dummy_field?: number | null;
};
export type DistributionForProductInProductListUpsertWithWhereUniqueWithoutProductInProductListInput = {
  create: DistributionForProductInProductListCreateWithoutProductInProductListInput;
  update: DistributionForProductInProductListUpdateWithoutProductInProductListInput;
  where: DistributionForProductInProductListWhereUniqueInput;
};
export type ProductListUpdateOneRequiredWithoutProductsInput = {
  connect?: ProductListWhereUniqueInput | null;
  connectOrCreate?: ProductListCreateOrConnectWithoutProductsInput | null;
  create?: ProductListCreateWithoutProductsInput | null;
  update?: ProductListUpdateWithoutProductsInput | null;
  upsert?: ProductListUpsertWithoutProductsInput | null;
};
export type ProductListCreateOrConnectWithoutProductsInput = {
  create: ProductListCreateWithoutProductsInput;
  where: ProductListWhereUniqueInput;
};
export type ProductListCreateWithoutProductsInput = {
  channels?: ChannelInProductListCreateNestedManyWithoutProductListInput | null;
  title: string;
};
export type ChannelInProductListCreateNestedManyWithoutProductListInput = {
  connect?: ReadonlyArray<ChannelInProductListWhereUniqueInput> | null;
  connectOrCreate?: ReadonlyArray<ChannelInProductListCreateOrConnectWithoutProductListInput> | null;
  create?: ReadonlyArray<ChannelInProductListCreateWithoutProductListInput> | null;
  createMany?: ChannelInProductListCreateManyProductListInputEnvelope | null;
};
export type ChannelInProductListCreateOrConnectWithoutProductListInput = {
  create: ChannelInProductListCreateWithoutProductListInput;
  where: ChannelInProductListWhereUniqueInput;
};
export type ChannelInProductListCreateWithoutProductListInput = {
  channel: ChannelCreateNestedOneWithoutProductListsInput;
};
export type ChannelCreateNestedOneWithoutProductListsInput = {
  connect?: ChannelWhereUniqueInput | null;
  connectOrCreate?: ChannelCreateOrConnectWithoutProductListsInput | null;
  create?: ChannelCreateWithoutProductListsInput | null;
};
export type ChannelCreateOrConnectWithoutProductListsInput = {
  create: ChannelCreateWithoutProductListsInput;
  where: ChannelWhereUniqueInput;
};
export type ChannelCreateWithoutProductListsInput = {
  Distribution?: DistributionCreateNestedManyWithoutChannelInput | null;
  name: string;
};
export type DistributionCreateNestedManyWithoutChannelInput = {
  connect?: ReadonlyArray<DistributionWhereUniqueInput> | null;
  connectOrCreate?: ReadonlyArray<DistributionCreateOrConnectWithoutChannelInput> | null;
  create?: ReadonlyArray<DistributionCreateWithoutChannelInput> | null;
  createMany?: DistributionCreateManyChannelInputEnvelope | null;
};
export type DistributionCreateOrConnectWithoutChannelInput = {
  create: DistributionCreateWithoutChannelInput;
  where: DistributionWhereUniqueInput;
};
export type DistributionCreateWithoutChannelInput = {
  name: string;
  productInProductLists?: DistributionForProductInProductListCreateNestedManyWithoutDistributionInput | null;
};
export type DistributionForProductInProductListCreateNestedManyWithoutDistributionInput = {
  connect?: ReadonlyArray<DistributionForProductInProductListWhereUniqueInput> | null;
  connectOrCreate?: ReadonlyArray<DistributionForProductInProductListCreateOrConnectWithoutDistributionInput> | null;
  create?: ReadonlyArray<DistributionForProductInProductListCreateWithoutDistributionInput> | null;
  createMany?: DistributionForProductInProductListCreateManyDistributionInputEnvelope | null;
};
export type DistributionForProductInProductListCreateOrConnectWithoutDistributionInput = {
  create: DistributionForProductInProductListCreateWithoutDistributionInput;
  where: DistributionForProductInProductListWhereUniqueInput;
};
export type DistributionForProductInProductListCreateWithoutDistributionInput = {
  productInProductList: ProductInProductListCreateNestedOneWithoutDistributionsInput;
};
export type ProductInProductListCreateNestedOneWithoutDistributionsInput = {
  connect?: ProductInProductListWhereUniqueInput | null;
  connectOrCreate?: ProductInProductListCreateOrConnectWithoutDistributionsInput | null;
  create?: ProductInProductListCreateWithoutDistributionsInput | null;
};
export type ProductInProductListCreateOrConnectWithoutDistributionsInput = {
  create: ProductInProductListCreateWithoutDistributionsInput;
  where: ProductInProductListWhereUniqueInput;
};
export type ProductInProductListCreateWithoutDistributionsInput = {
  exclusive?: string | null;
  exclusiveComments?: string | null;
  minimumOrderQuantity?: number | null;
  product: ProductCreateNestedOneWithoutProductListsInput;
  productLifecycleGroup?: ProductLifecycleGroupCreateNestedOneWithoutProductInProductListInput | null;
  productList: ProductListCreateNestedOneWithoutProductsInput;
};
export type ProductListCreateNestedOneWithoutProductsInput = {
  connect?: ProductListWhereUniqueInput | null;
  connectOrCreate?: ProductListCreateOrConnectWithoutProductsInput | null;
  create?: ProductListCreateWithoutProductsInput | null;
};
export type DistributionForProductInProductListCreateManyDistributionInputEnvelope = {
  data?: ReadonlyArray<DistributionForProductInProductListCreateManyDistributionInput> | null;
  skipDuplicates?: boolean | null;
};
export type DistributionForProductInProductListCreateManyDistributionInput = {
  id?: number | null;
  productInProductListId: number;
};
export type DistributionCreateManyChannelInputEnvelope = {
  data?: ReadonlyArray<DistributionCreateManyChannelInput> | null;
  skipDuplicates?: boolean | null;
};
export type DistributionCreateManyChannelInput = {
  id?: number | null;
  name: string;
};
export type ChannelInProductListCreateManyProductListInputEnvelope = {
  data?: ReadonlyArray<ChannelInProductListCreateManyProductListInput> | null;
  skipDuplicates?: boolean | null;
};
export type ChannelInProductListCreateManyProductListInput = {
  channelId: number;
  id?: number | null;
};
export type ProductListUpdateWithoutProductsInput = {
  channels?: ChannelInProductListUpdateManyWithoutProductListInput | null;
  title?: StringFieldUpdateOperationsInput | null;
};
export type ChannelInProductListUpdateManyWithoutProductListInput = {
  connect?: ReadonlyArray<ChannelInProductListWhereUniqueInput> | null;
  connectOrCreate?: ReadonlyArray<ChannelInProductListCreateOrConnectWithoutProductListInput> | null;
  create?: ReadonlyArray<ChannelInProductListCreateWithoutProductListInput> | null;
  createMany?: ChannelInProductListCreateManyProductListInputEnvelope | null;
  delete?: ReadonlyArray<ChannelInProductListWhereUniqueInput> | null;
  deleteMany?: ReadonlyArray<ChannelInProductListScalarWhereInput> | null;
  disconnect?: ReadonlyArray<ChannelInProductListWhereUniqueInput> | null;
  set?: ReadonlyArray<ChannelInProductListWhereUniqueInput> | null;
  update?: ReadonlyArray<ChannelInProductListUpdateWithWhereUniqueWithoutProductListInput> | null;
  updateMany?: ReadonlyArray<ChannelInProductListUpdateManyWithWhereWithoutProductListInput> | null;
  upsert?: ReadonlyArray<ChannelInProductListUpsertWithWhereUniqueWithoutProductListInput> | null;
};
export type ChannelInProductListUpdateWithWhereUniqueWithoutProductListInput = {
  data: ChannelInProductListUpdateWithoutProductListInput;
  where: ChannelInProductListWhereUniqueInput;
};
export type ChannelInProductListUpdateWithoutProductListInput = {
  channel?: ChannelUpdateOneRequiredWithoutProductListsInput | null;
};
export type ChannelUpdateOneRequiredWithoutProductListsInput = {
  connect?: ChannelWhereUniqueInput | null;
  connectOrCreate?: ChannelCreateOrConnectWithoutProductListsInput | null;
  create?: ChannelCreateWithoutProductListsInput | null;
  update?: ChannelUpdateWithoutProductListsInput | null;
  upsert?: ChannelUpsertWithoutProductListsInput | null;
};
export type ChannelUpdateWithoutProductListsInput = {
  Distribution?: DistributionUpdateManyWithoutChannelInput | null;
  name?: StringFieldUpdateOperationsInput | null;
};
export type DistributionUpdateManyWithoutChannelInput = {
  connect?: ReadonlyArray<DistributionWhereUniqueInput> | null;
  connectOrCreate?: ReadonlyArray<DistributionCreateOrConnectWithoutChannelInput> | null;
  create?: ReadonlyArray<DistributionCreateWithoutChannelInput> | null;
  createMany?: DistributionCreateManyChannelInputEnvelope | null;
  delete?: ReadonlyArray<DistributionWhereUniqueInput> | null;
  deleteMany?: ReadonlyArray<DistributionScalarWhereInput> | null;
  disconnect?: ReadonlyArray<DistributionWhereUniqueInput> | null;
  set?: ReadonlyArray<DistributionWhereUniqueInput> | null;
  update?: ReadonlyArray<DistributionUpdateWithWhereUniqueWithoutChannelInput> | null;
  updateMany?: ReadonlyArray<DistributionUpdateManyWithWhereWithoutChannelInput> | null;
  upsert?: ReadonlyArray<DistributionUpsertWithWhereUniqueWithoutChannelInput> | null;
};
export type DistributionScalarWhereInput = {
  AND?: ReadonlyArray<DistributionScalarWhereInput> | null;
  NOT?: ReadonlyArray<DistributionScalarWhereInput> | null;
  OR?: ReadonlyArray<DistributionScalarWhereInput> | null;
  channelId?: IntFilter | null;
  id?: IntFilter | null;
  name?: StringFilter | null;
};
export type StringFilter = {
  contains?: string | null;
  endsWith?: string | null;
  equals?: string | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string> | null;
  lt?: string | null;
  lte?: string | null;
  mode?: QueryMode | null;
  not?: NestedStringFilter | null;
  notIn?: ReadonlyArray<string> | null;
  startsWith?: string | null;
};
export type NestedStringFilter = {
  contains?: string | null;
  endsWith?: string | null;
  equals?: string | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string> | null;
  lt?: string | null;
  lte?: string | null;
  not?: NestedStringFilter | null;
  notIn?: ReadonlyArray<string> | null;
  startsWith?: string | null;
};
export type DistributionUpdateWithWhereUniqueWithoutChannelInput = {
  data: DistributionUpdateWithoutChannelInput;
  where: DistributionWhereUniqueInput;
};
export type DistributionUpdateWithoutChannelInput = {
  name?: StringFieldUpdateOperationsInput | null;
  productInProductLists?: DistributionForProductInProductListUpdateManyWithoutDistributionInput | null;
};
export type DistributionForProductInProductListUpdateManyWithoutDistributionInput = {
  connect?: ReadonlyArray<DistributionForProductInProductListWhereUniqueInput> | null;
  connectOrCreate?: ReadonlyArray<DistributionForProductInProductListCreateOrConnectWithoutDistributionInput> | null;
  create?: ReadonlyArray<DistributionForProductInProductListCreateWithoutDistributionInput> | null;
  createMany?: DistributionForProductInProductListCreateManyDistributionInputEnvelope | null;
  delete?: ReadonlyArray<DistributionForProductInProductListWhereUniqueInput> | null;
  deleteMany?: ReadonlyArray<DistributionForProductInProductListScalarWhereInput> | null;
  disconnect?: ReadonlyArray<DistributionForProductInProductListWhereUniqueInput> | null;
  set?: ReadonlyArray<DistributionForProductInProductListWhereUniqueInput> | null;
  update?: ReadonlyArray<DistributionForProductInProductListUpdateWithWhereUniqueWithoutDistributionInput> | null;
  updateMany?: ReadonlyArray<DistributionForProductInProductListUpdateManyWithWhereWithoutDistributionInput> | null;
  upsert?: ReadonlyArray<DistributionForProductInProductListUpsertWithWhereUniqueWithoutDistributionInput> | null;
};
export type DistributionForProductInProductListUpdateWithWhereUniqueWithoutDistributionInput = {
  data: DistributionForProductInProductListUpdateWithoutDistributionInput;
  where: DistributionForProductInProductListWhereUniqueInput;
};
export type DistributionForProductInProductListUpdateWithoutDistributionInput = {
  productInProductList?: ProductInProductListUpdateOneRequiredWithoutDistributionsInput | null;
};
export type ProductInProductListUpdateOneRequiredWithoutDistributionsInput = {
  connect?: ProductInProductListWhereUniqueInput | null;
  connectOrCreate?: ProductInProductListCreateOrConnectWithoutDistributionsInput | null;
  create?: ProductInProductListCreateWithoutDistributionsInput | null;
  update?: ProductInProductListUpdateWithoutDistributionsInput | null;
  upsert?: ProductInProductListUpsertWithoutDistributionsInput | null;
};
export type ProductInProductListUpdateWithoutDistributionsInput = {
  exclusive?: NullableStringFieldUpdateOperationsInput | null;
  exclusiveComments?: NullableStringFieldUpdateOperationsInput | null;
  minimumOrderQuantity?: NullableIntFieldUpdateOperationsInput | null;
  product?: ProductUpdateOneRequiredWithoutProductListsInput | null;
  productLifecycleGroup?: ProductLifecycleGroupUpdateOneWithoutProductInProductListInput | null;
  productList?: ProductListUpdateOneRequiredWithoutProductsInput | null;
};
export type ProductInProductListUpsertWithoutDistributionsInput = {
  create: ProductInProductListCreateWithoutDistributionsInput;
  update: ProductInProductListUpdateWithoutDistributionsInput;
};
export type DistributionForProductInProductListUpdateManyWithWhereWithoutDistributionInput = {
  data: DistributionForProductInProductListUpdateManyMutationInput;
  where: DistributionForProductInProductListScalarWhereInput;
};
export type DistributionForProductInProductListUpsertWithWhereUniqueWithoutDistributionInput = {
  create: DistributionForProductInProductListCreateWithoutDistributionInput;
  update: DistributionForProductInProductListUpdateWithoutDistributionInput;
  where: DistributionForProductInProductListWhereUniqueInput;
};
export type DistributionUpdateManyWithWhereWithoutChannelInput = {
  data: DistributionUpdateManyMutationInput;
  where: DistributionScalarWhereInput;
};
export type DistributionUpdateManyMutationInput = {
  name?: StringFieldUpdateOperationsInput | null;
};
export type DistributionUpsertWithWhereUniqueWithoutChannelInput = {
  create: DistributionCreateWithoutChannelInput;
  update: DistributionUpdateWithoutChannelInput;
  where: DistributionWhereUniqueInput;
};
export type ChannelUpsertWithoutProductListsInput = {
  create: ChannelCreateWithoutProductListsInput;
  update: ChannelUpdateWithoutProductListsInput;
};
export type ChannelInProductListUpdateManyWithWhereWithoutProductListInput = {
  data: ChannelInProductListUpdateManyMutationInput;
  where: ChannelInProductListScalarWhereInput;
};
export type ChannelInProductListUpsertWithWhereUniqueWithoutProductListInput = {
  create: ChannelInProductListCreateWithoutProductListInput;
  update: ChannelInProductListUpdateWithoutProductListInput;
  where: ChannelInProductListWhereUniqueInput;
};
export type ProductListUpsertWithoutProductsInput = {
  create: ProductListCreateWithoutProductsInput;
  update: ProductListUpdateWithoutProductsInput;
};
export type TableUpdateManyProductInProductListMutation$variables = {
  data?: ReadonlyArray<ProductInProductListUpdateRowInput> | null;
};
export type TableUpdateManyProductInProductListMutation$data = {
  readonly updateManyProductInProductList: ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"TableProductInProductListFragment">;
  }>;
};
export type TableUpdateManyProductInProductListMutation = {
  response: TableUpdateManyProductInProductListMutation$data;
  variables: TableUpdateManyProductInProductListMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "data"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "data",
    "variableName": "data"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TableUpdateManyProductInProductListMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ProductInProductList",
        "kind": "LinkedField",
        "name": "updateManyProductInProductList",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TableProductInProductListFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TableUpdateManyProductInProductListMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ProductInProductList",
        "kind": "LinkedField",
        "name": "updateManyProductInProductList",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "exclusive",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "exclusiveComments",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "minimumOrderQuantity",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ProductLifecycleGroup",
            "kind": "LinkedField",
            "name": "productLifecycleGroup",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "displayName",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "DistributionForProductInProductList",
            "kind": "LinkedField",
            "name": "distributions",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Distribution",
                "kind": "LinkedField",
                "name": "distribution",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "358a8585109b72bbc2e97a6df3f3a102",
    "id": null,
    "metadata": {},
    "name": "TableUpdateManyProductInProductListMutation",
    "operationKind": "mutation",
    "text": "mutation TableUpdateManyProductInProductListMutation(\n  $data: [ProductInProductListUpdateRowInput!]\n) {\n  updateManyProductInProductList(data: $data) {\n    id\n    ...TableProductInProductListFragment\n  }\n}\n\nfragment TableProductInProductListFragment on ProductInProductList {\n  exclusive\n  exclusiveComments\n  minimumOrderQuantity\n  productLifecycleGroup {\n    displayName\n  }\n  distributions {\n    distribution {\n      name\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "c1c2042c36cbb2d6b0b5c863139579ef";

export default node;
