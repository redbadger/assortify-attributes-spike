import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import { useCallback, useMemo, useRef } from "react";
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
            exclusive
            exclusiveComments
            minimumOrderQuantity
          }
        }
      }
    }
  }
`;

const defaultColDef = {
  resizable: true,
};

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

  return (
    <div className="ag-theme-alpine" tw="w-full h-96">
      <AgGridReact
        ref={gridRef}
        defaultColDef={defaultColDef}
        columnDefs={columnDefs}
        rowData={rowData}
        onFirstDataRendered={useCallback(
          (_) => _.columnApi.autoSizeAllColumns(),
          []
        )}
      />
    </div>
  );
};

export default Table;
