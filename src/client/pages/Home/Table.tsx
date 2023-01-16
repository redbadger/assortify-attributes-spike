import { Button } from "@mui/material";
import { FirstDataRenderedEvent } from "ag-grid-community";
import { AgGridCommon } from "ag-grid-community/dist/lib/interfaces/iCommon";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import produce from "immer";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { graphql, useFragment, useMutation } from "react-relay";
import "twin.macro";
import { TableFragment$key } from "./__generated__/TableFragment.graphql";

export const productFragment = graphql`
  fragment TableProductFragment on Product {
    pc9
    colorwayName
  }
`;

export const productInProductListFragment = graphql`
  fragment TableProductInProductListFragment on ProductInProductList {
    exclusive
    exclusiveComments
    minimumOrderQuantity
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
            ...TableProductInProductListFragment @relay(mask: false)
          }
        }
      }
    }
  }
`;

const mutation = graphql`
  mutation TableUpdateManyProductInProductListMutation(
    $data: [ProductInProductListUpdateRowInput!]
  ) {
    updateManyProductInProductList(data: $data) {
      id
      ...TableProductInProductListFragment
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

  const [commit] = useMutation(mutation);
  const [resetCount, setResetCount] = useState(0);

  const rowData = useMemo(
    () =>
      edges.map(({ node }) => ({
        ...node.product,
        ...node.productInProductList,
      })),
    [edges, resetCount]
  );

  const gridRef = useRef<AgGridReact<typeof rowData[0]>>(null);

  const [edits, setEdits] = useState<{
    [ownId: string]: { [key: string]: any };
  }>({});

  const handleCellValueChanged = useCallback(
    (_: AgGridCommon<typeof rowData[0]>) => {
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

  useEffect(() => {
    if (gridRef.current?.api?.forEachNode) {
      handleCellValueChanged(gridRef.current);
    }
  }, [edges, resetCount]);

  const handleFirstDataRendered = useCallback(
    (_: FirstDataRenderedEvent<typeof rowData[0]>) =>
      _.columnApi.autoSizeAllColumns(),
    []
  );

  const handleSave = useCallback(() => {
    const data = Object.entries(edits).map(([key, value]) => ({
      where: { id: +key },
      data: value,
    }));

    commit({
      variables: { data },
    });
  }, [edits]);

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

  const handleCancel = useCallback(
    () => setResetCount((state) => state + 1),
    []
  );

  const dirty = !!Object.keys(edits).length;

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
      <Button
        tw="mr-4"
        variant="contained"
        size="large"
        disabled={!dirty}
        onClick={handleSave}
      >
        Save
      </Button>
      <Button size="large" onClick={handleCancel} disabled={!dirty}>
        Cancel
      </Button>
    </div>
  );
};

export default Table;
