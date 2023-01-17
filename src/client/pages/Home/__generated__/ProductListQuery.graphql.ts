/**
 * @generated SignedSource<<8fd10df5e5fc3b2061474ef1b44b24bd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProductListQuery$variables = {
  id?: number | null;
};
export type ProductListQuery$data = {
  readonly productList: {
    readonly channels: ReadonlyArray<{
      readonly channel: {
        readonly name: string;
      };
    }>;
    readonly title: string;
    readonly " $fragmentSpreads": FragmentRefs<"TableDataFragment">;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"TableLookupValuesFragment">;
};
export type ProductListQuery = {
  response: ProductListQuery$data;
  variables: ProductListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "kind": "ObjectValue",
    "name": "where"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "displayName",
    "storageKey": null
  }
],
v5 = {
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
    "name": "ProductListQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "TableLookupValuesFragment"
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ProductList",
        "kind": "LinkedField",
        "name": "productList",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ChannelInProductList",
            "kind": "LinkedField",
            "name": "channels",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Channel",
                "kind": "LinkedField",
                "name": "channel",
                "plural": false,
                "selections": [
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TableDataFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProductListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ProductLifecycleGroup",
        "kind": "LinkedField",
        "name": "productLifecycleGroups",
        "plural": true,
        "selections": (v4/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ProductList",
        "kind": "LinkedField",
        "name": "productList",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ChannelInProductList",
            "kind": "LinkedField",
            "name": "channels",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Channel",
                "kind": "LinkedField",
                "name": "channel",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v5/*: any*/)
                ],
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 10
              }
            ],
            "concreteType": "ProductListProductConnection",
            "kind": "LinkedField",
            "name": "productListProductConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ProductListProductEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ProductListProduct",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Product",
                        "kind": "LinkedField",
                        "name": "product",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "pc9",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "colorwayName",
                            "storageKey": null
                          },
                          (v5/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ProductInProductList",
                        "kind": "LinkedField",
                        "name": "productInProductList",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "ownId",
                            "storageKey": null
                          },
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
                            "selections": (v4/*: any*/),
                            "storageKey": null
                          },
                          (v5/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v5/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "productListProductConnection(first:10)"
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3261a221ba373ecb9a3b3ab6c2b4d0c1",
    "id": null,
    "metadata": {},
    "name": "ProductListQuery",
    "operationKind": "query",
    "text": "query ProductListQuery(\n  $id: Int\n) {\n  ...TableLookupValuesFragment\n  productList(where: {id: $id}) {\n    title\n    channels {\n      channel {\n        name\n        id\n      }\n      id\n    }\n    ...TableDataFragment\n    id\n  }\n}\n\nfragment TableDataFragment on ProductList {\n  productListProductConnection(first: 10) {\n    edges {\n      node {\n        product {\n          pc9\n          colorwayName\n          id\n        }\n        productInProductList {\n          ownId\n          exclusive\n          exclusiveComments\n          minimumOrderQuantity\n          productLifecycleGroup {\n            displayName\n          }\n          id\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment TableLookupValuesFragment on Query {\n  productLifecycleGroups {\n    displayName\n  }\n}\n"
  }
};
})();

(node as any).hash = "9ba804d749cf4ac2f6354694d8d7fd44";

export default node;
