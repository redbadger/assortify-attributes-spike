/**
 * @generated SignedSource<<0e7640e1b424cf474d6b73916f241270>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TableLookupValuesFragment$data = {
  readonly productLifecycleGroups: ReadonlyArray<{
    readonly displayName: string;
  }>;
  readonly " $fragmentType": "TableLookupValuesFragment";
};
export type TableLookupValuesFragment$key = {
  readonly " $data"?: TableLookupValuesFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TableLookupValuesFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TableLookupValuesFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ProductLifecycleGroup",
      "kind": "LinkedField",
      "name": "productLifecycleGroups",
      "plural": true,
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
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "76b2dc229521b85a9ac4ab43cb36728a";

export default node;
