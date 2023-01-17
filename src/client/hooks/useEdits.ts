import { AgGridCommon } from "ag-grid-community/dist/lib/interfaces/iCommon";
import produce from "immer";
import { useCallback, useState } from "react";
import flattenLookups from "../utils/flattenLookups";

const useEdits = <
  TRowData extends { ownId: number; [key: string]: any },
  TEdges extends readonly {
    readonly node: {
      readonly productInProductList: {
        readonly ownId: number;
        readonly [key: string]: any;
      };
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

            if (!nodeOnServer) throw new Error();
            const flattenedNodeOnServer = flattenLookups(nodeOnServer);

            Object.entries(node.data ?? []).map(([key, value]) => {
              const colDef = _.columnApi.getColumn(key)?.getColDef();
              const isEditable = colDef?.editable;

              if (isEditable) {
                const ownId = node.data?.ownId;

                if (ownId) {
                  const valueEdited = value !== flattenedNodeOnServer?.[key];

                  if (valueEdited) {
                    if (!edits[ownId]) edits[ownId] = {};
                    if (!edits[ownId][key]) edits[ownId][key] = {};

                    if (colDef?.cellEditor === "agSelectCellEditor") {
                      edits[ownId][key].connect = { displayName: value };
                    } else {
                      edits[ownId][key].set = value;
                    }
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
