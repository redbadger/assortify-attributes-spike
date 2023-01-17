/**
 * @generated SignedSource<<e4b4efefd94dd2fdec79fc22e49521ab>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TableProductInProductListFragment$data = {
  readonly distributions: ReadonlyArray<{
    readonly distribution: {
      readonly name: string;
    };
  }>;
  readonly exclusive: string | null;
  readonly exclusiveComments: string | null;
  readonly minimumOrderQuantity: number | null;
  readonly productLifecycleGroup: {
    readonly displayName: string;
  } | null;
  readonly " $fragmentType": "TableProductInProductListFragment";
};
export type TableProductInProductListFragment$key = {
  readonly " $data"?: TableProductInProductListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TableProductInProductListFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TableProductInProductListFragment",
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
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ProductInProductList",
  "abstractKey": null
};

(node as any).hash = "9d761c50d036ef1f552212c2b52c53fc";

export default node;
