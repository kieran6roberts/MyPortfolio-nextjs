import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import useApollo from "../src/lib/apolloClient";
import "../src/App.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.projects);
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
};
