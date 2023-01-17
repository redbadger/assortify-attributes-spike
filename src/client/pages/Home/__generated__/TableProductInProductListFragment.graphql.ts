/**
 * @generated SignedSource<<1014db6cdd90b52e66fb39f49c8ea716>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TableProductInProductListFragment$data = {
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
    }
  ],
  "type": "ProductInProductList",
  "abstractKey": null
};

(node as any).hash = "3970e53f2c35d9b3b1dc7db762b45801";

export default node;
