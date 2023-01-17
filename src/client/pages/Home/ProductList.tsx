import { Typography } from "@mui/material";
import { graphql, useLazyLoadQuery } from "react-relay";
import "twin.macro";
import Table from "./Table";
import { ProductListQuery } from "./__generated__/ProductListQuery.graphql";

const query = graphql`
  query ProductListQuery($id: Int) {
    ...TableLookupValuesFragment
    productList(where: { id: $id }) {
      title
      ...TableDataFragment
    }
  }
`;

const ProductList = () => {
  const data = useLazyLoadQuery<ProductListQuery>(query, { id: 1 });
  const { productList } = data;

  return productList ? (
    <>
      <Typography variant="h6" component="h2" tw="mb-3">
        {productList.title}
      </Typography>
      <Table root={data} productList={productList} />
    </>
  ) : null;
};

export default ProductList;
