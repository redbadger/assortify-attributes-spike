import { Global } from "@emotion/react";
import { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { css } from "twin.macro";
import AppBar from "./AppBar";
import Error from "./Error";

const Page = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Global
        styles={css`
          body {
            min-height: 100vh;
          }

          #root {
            min-height: 100vh;
            padding: 0.02px 0;
          }
        `}
      />
      <AppBar />
      <main tw="p-4 min-w-[300px]">
        <ErrorBoundary FallbackComponent={Error}>{children}</ErrorBoundary>
      </main>
    </>
  );
};

export default Page;
