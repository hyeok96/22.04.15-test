import "../styles/globals.css";
import LayoutPage from "./src/component/common/layout";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import { createUploadLink } from "apollo-upload-client";

function MyApp({ Component, pageProps }: AppProps) {
  const uplodLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uplodLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <LayoutPage>
        <Component {...pageProps} />
      </LayoutPage>
    </ApolloProvider>
  );
}

export default MyApp;
