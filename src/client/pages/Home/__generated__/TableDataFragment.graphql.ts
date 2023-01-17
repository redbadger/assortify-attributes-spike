/**
 * @generated SignedSource<<00384000309ab4fea70d98b50d1ddbe6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TableDataFragment$data = {
  readonly productListProductConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly product: {
          readonly colorwayName: string;
          readonly pc9: string;
        };
        readonly productInProductList: {
          readonly exclusive: string | null;
          readonly exclusiveComments: string | null;
          readonly minimumOrderQuantity: number | null;
          readonly ownId: number;
          readonly productLifecycleGroup: {
            readonly displayName: string;
          } | null;
        };
      };
    }>;
  };
  readonly " $fragmentType": "TableDataFragment";
};
export type TableDataFragment$key = {
  readonly " $data"?: TableDataFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TableDataFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TableDataFragment",
  "selections": [
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
                    }
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
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "productListProductConnection(first:10)"
    }
  ],
  "type": "ProductList",
  "abstractKey": null
};

(node as any).hash = "b3080e37e022b516fb68f07b91e55602";

export default node;
