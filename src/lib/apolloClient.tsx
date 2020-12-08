import { useMemo } from "react";
import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

let apolloClient: ApolloClient<NormalizedCacheObject> | null;

function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === "undefined",
        link: new HttpLink({
            uri: publicRuntimeConfig.CMS_API
        }),
        cache: new InMemoryCache()
    });
};

export function initApolloClient(initialState: any = null) {
    const client = apolloClient ? apolloClient : createApolloClient();
    if (initialState) {
        const cache = client.extract();
        client.cache.restore({...cache, ...initialState });
    }

    if (typeof window === "undefined") return client;
    if (!apolloClient) apolloClient = client;
    return client;
};

export default function useApollo(initialState: any) {
    const store = useMemo(() => initApolloClient(initialState), [initialState]);
    return store;
}