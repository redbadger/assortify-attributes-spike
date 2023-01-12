import serialize from "serialize-javascript";
import type { AppContext } from "../client/App";

type IndexProps = {
  content: string;
  manifest?: any;
  context: AppContext;
};

const Index = ({ content, manifest, context }: IndexProps) => {
  const contextJs = `window.__CONTEXT__ = ${serialize(context, {
    isJSON: true,
  })}`;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=block"
        />
        <title>{context.title}</title>{" "}
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: content }} />{" "}
        <script
          type="module"
          src={
            manifest?.["src/entry-client.tsx"]?.file ?? "/src/entry-client.tsx"
          }
        />
        <script dangerouslySetInnerHTML={{ __html: contextJs }} />
      </body>
    </html>
  );
};

export default Index;
