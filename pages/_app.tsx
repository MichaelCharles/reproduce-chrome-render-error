import "@/styles/globals.css";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { identity } from "ramda";
import { type ReactElement, type ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? identity;

  return <>{getLayout(<Component {...pageProps} />)}</>;
}
