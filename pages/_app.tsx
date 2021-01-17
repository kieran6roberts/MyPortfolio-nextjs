import type { AppProps } from "next/app";
import { AnimateSharedLayout } from "framer-motion";

import "src/App.css";
import Layout from "../src/components/Layout/Layout";

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
      <AnimateSharedLayout>
        <Layout>
            <Component {...pageProps} key={router.route} />
        </Layout>
      </AnimateSharedLayout>
  )
};
