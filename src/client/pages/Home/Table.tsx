import { Button } from "@mui/material";
import { ColDef, FirstDataRenderedEvent } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import produce from "immer";
import { useSnackbar } from "notistack";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { graphql, useFragment, useMutation } from "react-relay";
import "twin.macro";
import MultiSelectCellEditor from "../../components/MutliSelectCellEditor";
import useEdits from "../../hooks/useEdits";
import flattenLookups from "../../utils/flattenLookups";
import { TableDataFragment$key } from "./__generated__/TableDataFragment.graphql";
import { TableLookupValuesFragment$key } from "./__generated__/TableLookupValuesFragment.graphql";

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
    productLifecycleGroup {
      displayName
    }
    distributions {
      distribution {
        name
      }
    }
  }
`;

const columnDefsStatic: ColDef<any>[] = [
  { field: "pc9", headerName: "PC9" },
  { field: "colorwayName" },
  {
    field: "productLifecycleGroup",
    editable: true,
    cellEditor: "agSelectCellEditor",
  },
  {
    field: "distributions",
    editable: true,
    cellEditor: MultiSelectCellEditor,
    cellEditorPopup: true,
    valueFormatter: ({ value }) =>
      JSON.parse(value)
        .map((_) => _.distribution.name)
        .sort()
        .join(", "),
  },
  {
    field: "minimumOrderQuantity",
    headerName: "MOQ",
    editable: true,
    type: "rightAligned",
    valueParser: (_) => Number(_.newValue),
  },
  { field: "exclusive", editable: true },
  { field: "exclusiveComments", editable: true },
];

const lookupValuesFragment = graphql`
  fragment TableLookupValuesFragment on Query {
    productLifecycleGroups {
      displayName
    }
  }
`;

const tableDataFragment = graphql`
  fragment TableDataFragment on ProductList {
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

const Table = ({
  root,
  productList,
}: {
  root: TableLookupValuesFragment$key;
  productList: TableDataFragment$key;
}) => {
  const lookupValues = useFragment(lookupValuesFragment, root);

  const {
    productListProductConnection: { edges },
  } = useFragment(tableDataFragment, productList);

  const [commit] = useMutation(mutation);

  const [resetCount, setResetCount] = useState(0);

  const rowData = useMemo(
    () =>
      edges.map(({ node }) => ({
        ...flattenLookups(node.product),
        ...flattenLookups(node.productInProductList),
        ownId: node.productInProductList.ownId,
      })),
    [edges, resetCount]
  );

  const gridRef = useRef<AgGridReact<typeof rowData[0]>>(null);

  const [edits, updateEdits] = useEdits<typeof rowData[0], typeof edges>(edges);

  useEffect(() => {
    if (gridRef.current?.api?.forEachNode) {
      updateEdits(gridRef.current);
    }
  }, [edges, resetCount]);

  const handleFirstDataRendered = useCallback(
    (_: FirstDataRenderedEvent<typeof rowData[0]>) =>
      _.columnApi.autoSizeAllColumns(),
    []
  );

  const { enqueueSnackbar } = useSnackbar();

  const handleSave = useCallback(() => {
    const data = Object.entries(edits).map(([key, value]) => ({
      where: { id: +key },
      data: value,
    }));

    commit({
      variables: { data },
      onCompleted: (_response, errors) => {
        if (errors) {
          enqueueSnackbar("Error saving edits", { variant: "error" });
        } else {
          enqueueSnackbar("All assortment edits saved", { variant: "success" });
        }
      },
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

  const columnDefs = useMemo(
    () =>
      produce(columnDefsStatic, (draft) => {
        for (const col of draft) {
          const options = lookupValues?.[`${col.field}s`];
          if (options) {
            col.cellEditorParams = {
              values: ["", ...options.map((_) => _.displayName)],
            };
          }
        }
      }),
    [lookupValues]
  );

  const handleCancel = useCallback(
    () => setResetCount((state) => state + 1),
    []
  );

  const dirty = !!Object.keys(edits).length;

  return (
    <div className="ag-theme-alpine" tw="w-full h-[280px]">
      <AgGridReact
        ref={gridRef}
        defaultColDef={defaultColDef}
        columnDefs={columnDefs}
        rowData={rowData}
        onFirstDataRendered={handleFirstDataRendered}
        onCellValueChanged={updateEdits}
        stopEditingWhenCellsLoseFocus
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
