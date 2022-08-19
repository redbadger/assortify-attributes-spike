import { Card } from "@mui/material";
import { capitalize } from "lodash-es";
import { useLocation } from "react-router-dom";
import Page from "../../components/Page";
import Suspense from "../../components/Suspense";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import SkeletonTodoManager from "./SkeletonTodoManager";
import TodoManager from "./TodoManager";
import { Filter } from "./__generated__/TodoManagerQuery.graphql";

const Home = () => {
  const { pathname } = useLocation();
  const filter = (pathname.replace("/", "").toLowerCase() || "all") as Filter;

  useDocumentTitle(filter !== "all" ? capitalize(filter) : "");

  return (
    <Page>
      <Card>
        <Suspense fallback={<SkeletonTodoManager />}>
          <TodoManager filter={filter} />
        </Suspense>
      </Card>
    </Page>
  );
};

export default Home;
