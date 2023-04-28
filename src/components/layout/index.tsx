import Head from "next/head";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Search Podcasts</title>
        <meta name="description" content="Search for your favourite podcasts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full flex-col items-center p-4 mx-auto">
        {children}
      </main>
    </>
  );
};
export default Layout;
