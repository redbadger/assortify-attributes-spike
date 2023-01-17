/**
 * @generated SignedSource<<a79e48bbb37e40b44c0114e6df53bb5f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProductInProductListUpdateRowInput = {
  data: ProductInProductListUpdateInput;
  where: ProductInProductListWhereUniqueInput;
};
export type ProductInProductListUpdateInput = {
  exclusive?: NullableStringFieldUpdateOperationsInput | null;
  exclusiveComments?: NullableStringFieldUpdateOperationsInput | null;
  minimumOrderQuantity?: NullableIntFieldUpdateOperationsInput | null;
  product?: ProductUpdateOneRequiredWithoutProductListsInput | null;
  productLifecycleGroup?: ProductLifecycleGroupUpdateOneWithoutProductInProductListInput | null;
  productList?: ProductListUpdateOneRequiredWithoutProductsInput | null;
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
export type ProductUpdateWithoutProductListsInput = {
  colorwayName?: StringFieldUpdateOperationsInput | null;
  pc9?: StringFieldUpdateOperationsInput | null;
};
export type StringFieldUpdateOperationsInput = {
  set?: string | null;
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
export type ProductLifecycleGroupUpdateWithoutProductInProductListInput = {
  displayName?: StringFieldUpdateOperationsInput | null;
  name?: StringFieldUpdateOperationsInput | null;
};
export type ProductLifecycleGroupUpsertWithoutProductInProductListInput = {
  create: ProductLifecycleGroupCreateWithoutProductInProductListInput;
  update: ProductLifecycleGroupUpdateWithoutProductInProductListInput;
};
export type ProductListUpdateOneRequiredWithoutProductsInput = {
  connect?: ProductListWhereUniqueInput | null;
  connectOrCreate?: ProductListCreateOrConnectWithoutProductsInput | null;
  create?: ProductListCreateWithoutProductsInput | null;
  update?: ProductListUpdateWithoutProductsInput | null;
  upsert?: ProductListUpsertWithoutProductsInput | null;
};
export type ProductListWhereUniqueInput = {
  id?: number | null;
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
export type ChannelInProductListWhereUniqueInput = {
  channelId_productListId?: ChannelInProductListChannelIdProductListIdCompoundUniqueInput | null;
  id?: number | null;
};
export type ChannelInProductListChannelIdProductListIdCompoundUniqueInput = {
  channelId: number;
  productListId: number;
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
export type ChannelWhereUniqueInput = {
  id?: number | null;
  name?: string | null;
};
export type ChannelCreateOrConnectWithoutProductListsInput = {
  create: ChannelCreateWithoutProductListsInput;
  where: ChannelWhereUniqueInput;
};
export type ChannelCreateWithoutProductListsInput = {
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
export type ChannelInProductListScalarWhereInput = {
  AND?: ReadonlyArray<ChannelInProductListScalarWhereInput> | null;
  NOT?: ReadonlyArray<ChannelInProductListScalarWhereInput> | null;
  OR?: ReadonlyArray<ChannelInProductListScalarWhereInput> | null;
  channelId?: IntFilter | null;
  id?: IntFilter | null;
  productListId?: IntFilter | null;
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
  name?: StringFieldUpdateOperationsInput | null;
};
export type ChannelUpsertWithoutProductListsInput = {
  create: ChannelCreateWithoutProductListsInput;
  update: ChannelUpdateWithoutProductListsInput;
};
export type ChannelInProductListUpdateManyWithWhereWithoutProductListInput = {
  data: ChannelInProductListUpdateManyMutationInput;
  where: ChannelInProductListScalarWhereInput;
};
export type ChannelInProductListUpdateManyMutationInput = {
  _dummy_field?: number | null;
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
export type ProductInProductListWhereUniqueInput = {
  id?: number | null;
  productId_productListId?: ProductInProductListProductIdProductListIdCompoundUniqueInput | null;
};
export type ProductInProductListProductIdProductListIdCompoundUniqueInput = {
  productId: number;
  productListId: number;
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5b8e78ae1cb5f5112813c26f12efb691",
    "id": null,
    "metadata": {},
    "name": "TableUpdateManyProductInProductListMutation",
    "operationKind": "mutation",
    "text": "mutation TableUpdateManyProductInProductListMutation(\n  $data: [ProductInProductListUpdateRowInput!]\n) {\n  updateManyProductInProductList(data: $data) {\n    id\n    ...TableProductInProductListFragment\n  }\n}\n\nfragment TableProductInProductListFragment on ProductInProductList {\n  exclusive\n  exclusiveComments\n  minimumOrderQuantity\n  productLifecycleGroup {\n    displayName\n  }\n}\n"
  }
};
})();

(node as any).hash = "c1c2042c36cbb2d6b0b5c863139579ef";

export default node;
