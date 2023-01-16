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

const Table = ({ productList }: { productList: TableFragment$key }) => {
  const data = useFragment(fragment, productList);

  return (
    <pre tw="overflow-auto bg-gray-200 p-4 text-sm">
      {JSON.stringify(data, null, 2)}
    </pre>
  );
};

export default Table;
