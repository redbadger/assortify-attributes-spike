import { Typography } from "@mui/material";
import { graphql, useLazyLoadQuery } from "react-relay";
import "twin.macro";
import Table from "./Table";
import { ProductListQuery } from "./__generated__/ProductListQuery.graphql";

const query = graphql`
  query ProductListQuery($id: Int) {
    productList(where: { id: $id }) {
      title
      ...TableFragment
    }
  }
`;

const ProductList = () => {
  const { productList } = useLazyLoadQuery<ProductListQuery>(query, { id: 1 });

  return productList ? (
    <>
      <Typography variant="h6" component="h2">
        {productList.title}
      </Typography>
      <Table productList={productList} />
    </>
  ) : null;
};

export default ProductList;
