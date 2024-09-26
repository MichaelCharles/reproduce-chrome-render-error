import Head from "next/head";
import { PropsWithChildren } from "react";

import Searchbar from "./Searchbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Head>
        <title>Test</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Sidebar />
        <div className="flex flex-1 flex-col pl-64">
          <Searchbar />
          <main className="py-6 px-3 @container/main min-h-screen overflow-hidden  ">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
