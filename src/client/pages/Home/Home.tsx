import "twin.macro";
import Page from "../../components/Page";
import Suspense from "../../components/Suspense";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import ProductList from "./ProductList";

const Home = () => {
  useDocumentTitle();

  return (
    <Page>
      <Suspense fallback={<p tw="text-center">Am load...</p>}>
        <ProductList />
      </Suspense>
    </Page>
  );
};

export default Home;
