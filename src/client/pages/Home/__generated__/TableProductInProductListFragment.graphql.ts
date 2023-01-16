/**
 * @generated SignedSource<<c232bb69da771e95e6a6bd33c8b6613f>>
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
    }
  ],
  "type": "ProductInProductList",
  "abstractKey": null
};

(node as any).hash = "2c10862852832c6d2711521cee72dda8";

export default node;
