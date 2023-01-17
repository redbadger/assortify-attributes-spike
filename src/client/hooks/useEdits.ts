import { AgGridCommon } from "ag-grid-community/dist/lib/interfaces/iCommon";
import produce from "immer";
import { useCallback, useState } from "react";

const useEdits = <
  TRowData extends { ownId: number; [key: string]: any },
  TEdges extends readonly {
    readonly node: {
      readonly productInProductList: { readonly ownId: number };
    };
  }[]
>(
  edges: TEdges
) => {
  const [edits, setEdits] = useState<{
    [ownId: string]: { [key: string]: any };
  }>({});

  const updateEdits = useCallback(
    (_: AgGridCommon<TRowData>) => {
      setEdits(
        produce((edits) => {
          _.api.forEachNode((node) => {
            const nodeOnServer = edges.find(
              (_) => _.node.productInProductList.ownId === node.data?.ownId
            )?.node.productInProductList;

            Object.entries(node.data ?? []).map(([key, value]) => {
              const isEditable = _.columnApi
                .getColumn(key)
                ?.getColDef().editable;

              if (isEditable) {
                const ownId = node.data?.ownId;

                if (ownId) {
                  const valueEdited = value !== nodeOnServer?.[key];

                  if (valueEdited) {
                    if (!edits[ownId]) edits[ownId] = {};
                    if (!edits[ownId][key]) edits[ownId][key] = {};
                    edits[ownId][key].set = value;
                  } else if (edits[ownId]) {
                    delete edits[ownId][key];
                    if (!Object.keys(edits[ownId]).length) {
                      delete edits[ownId];
                    }
                  }
                }
              }
            });
          });
        })
      );
    },
    [edges]
  );

  return [edits, updateEdits] as const;
};

export default useEdits;
