/**
 * @generated SignedSource<<f862eebabf0f37f4d7c8e35eaeeaafb8>>
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
  productList?: ProductListUpdateOneWithoutProductsInput | null;
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
export type ProductListUpdateOneWithoutProductsInput = {
  connect?: ProductListWhereUniqueInput | null;
  connectOrCreate?: ProductListCreateOrConnectWithoutProductsInput | null;
  create?: ProductListCreateWithoutProductsInput | null;
  delete?: boolean | null;
  disconnect?: boolean | null;
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
  title: string;
};
export type ProductListUpdateWithoutProductsInput = {
  title?: StringFieldUpdateOperationsInput | null;
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
