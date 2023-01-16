/**
 * @generated SignedSource<<a144be255252d9c134b056228beb4d97>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TableProductFragment$data = {
  readonly colorwayName: string;
  readonly pc9: string;
  readonly " $fragmentType": "TableProductFragment";
};
export type TableProductFragment$key = {
  readonly " $data"?: TableProductFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TableProductFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TableProductFragment",
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
  "type": "Product",
  "abstractKey": null
};

(node as any).hash = "9f9370e007da1b60b0244abef36cf2f0";

export default node;
