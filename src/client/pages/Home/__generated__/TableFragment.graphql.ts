/**
 * @generated SignedSource<<a7f63a6af920c6e88a01b32ed04bf728>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TableFragment$data = {
  readonly productListProductConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly product: {
          readonly colorwayName: string;
          readonly id: string;
          readonly pc9: string;
        };
        readonly productInProductList: {
          readonly exclusive: string | null;
          readonly exclusiveComments: string | null;
          readonly minimumOrderQuantity: number | null;
        };
      };
    }>;
  };
  readonly " $fragmentType": "TableFragment";
};
export type TableFragment$key = {
  readonly " $data"?: TableFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TableFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TableFragment",
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
                      "name": "id",
                      "storageKey": null
                    },
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

(node as any).hash = "0f9c95a38d6caf7a02a3d007f1b60676";

export default node;
