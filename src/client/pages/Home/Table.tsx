import {
  CellValueChangedEvent,
  FirstDataRenderedEvent,
} from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import produce from "immer";
import { useCallback, useMemo, useRef, useState } from "react";
import { graphql, useFragment } from "react-relay";
import "twin.macro";
import { TableFragment$key } from "./__generated__/TableFragment.graphql";

export const productFragment = graphql`
  fragment TableProductFragment on Product {
    pc9
    colorwayName
  }
`;

const fragment = graphql`
  fragment TableFragment on ProductList {
    productListProductConnection(first: 10) {
      edges {
        node {
          product {
            ...TableProductFragment @relay(mask: false)
          }
          productInProductList {
            ownId
            exclusive
            exclusiveComments
            minimumOrderQuantity
          }
        }
      }
    }
  }
`;

const columnDefs = [
  { field: "pc9" },
  { field: "colorwayName" },
  { field: "exclusive", editable: true },
  { field: "exclusiveComments", editable: true },
  {
    field: "minimumOrderQuantity",
    editable: true,
    valueParser: (_) => Number(_.newValue),
  },
];

const Table = ({ productList }: { productList: TableFragment$key }) => {
  const {
    productListProductConnection: { edges },
  } = useFragment(fragment, productList);

  const rowData = useMemo(
    () =>
      edges.map(({ node }) => ({
        ...node.product,
        ...node.productInProductList,
      })),
    [edges]
  );

  const gridRef = useRef<AgGridReact<typeof rowData[0]>>(null);

  const [edits, setEdits] = useState<{
    [ownId: string]: { [key: string]: any };
  }>({});

  const handleCellValueChanged = useCallback(
    (_: CellValueChangedEvent<typeof rowData[0]>) => {
      setEdits(
        produce((edits) => {
          _.api.forEachNode((node) => {
            const nodeOnServer = rowData.find(
              (_) => _.ownId === node.data?.ownId
            );

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
                    edits[ownId][key] = value;
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
    []
  );

  const handleFirstDataRendered = useCallback(
    (_: FirstDataRenderedEvent<typeof rowData[0]>) =>
      _.columnApi.autoSizeAllColumns(),
    []
  );

  const defaultColDef = useMemo(
    () => ({
      resizable: true,
      cellStyle: (_) =>
        edits[_.data.ownId]?.[_.column.colId] !== undefined
          ? { backgroundColor: "rgba(25, 118, 210, 0.2)" }
          : null,
    }),
    [edits]
  );

  return (
    <div className="ag-theme-alpine" tw="w-full h-52">
      <AgGridReact
        ref={gridRef}
        defaultColDef={defaultColDef}
        columnDefs={columnDefs}
        rowData={rowData}
        onFirstDataRendered={handleFirstDataRendered}
        onCellValueChanged={handleCellValueChanged}
      />
      <pre tw="p-4 bg-gray-200">{JSON.stringify(edits, null, 2)}</pre>
    </div>
  );
};

export default Table;
