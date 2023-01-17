import { Chip, Typography } from "@mui/material";
import { graphql, useLazyLoadQuery } from "react-relay";
import "twin.macro";
import Table from "./Table";
import { ProductListQuery } from "./__generated__/ProductListQuery.graphql";

const query = graphql`
  query ProductListQuery($id: Int) {
    ...TableLookupValuesFragment
    productList(where: { id: $id }) {
      title
      channels {
        channel {
          name
        }
      }
      ...TableDataFragment
    }
  }
`;

const ProductList = () => {
  const data = useLazyLoadQuery<ProductListQuery>(query, { id: 1 });
  const { productList } = data;

  return productList ? (
    <>
      <Typography variant="h6" component="h2" tw="mb-2">
        {productList.title}
      </Typography>
      <div tw="flex gap-2 items-baseline mb-3">
        <span>Channels:</span>
        {productList.channels.map((_) => (
          <Chip key={_.channel.name} label={_.channel.name} />
        ))}
      </div>
      <Table root={data} productList={productList} />
    </>
  ) : null;
};

export default ProductList;
