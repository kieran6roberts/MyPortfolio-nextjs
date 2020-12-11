import type { AppProps } from "next/app";
import "src/App.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  )
};
