import { Card } from "@mui/material";
import "twin.macro";
import Page from "../../components/Page";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Home = () => {
  useDocumentTitle();

  return (
    <Page>
      <Card tw="px-4">
        <p>Hello, world!</p>
      </Card>
    </Page>
  );
};

export default Home;
