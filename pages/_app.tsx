import type { AppProps } from "next/app";
import { AnimateSharedLayout } from "framer-motion";
import Layout from "src/components/Layout/Layout";
import "src/App.css";

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
      <AnimateSharedLayout>
        <Layout>
            <Component {...pageProps} key={router.route} />
        </Layout>
      </AnimateSharedLayout>
  )
};
