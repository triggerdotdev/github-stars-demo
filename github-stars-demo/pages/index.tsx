import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">Look to the stars</h1>

        <p className="mt-3 text-2xl">Enter a repo name</p>
      </main>

      <footer className="flex h-10 w-full items-center justify-center border-t">
        <a
          className="flex items-center text-sm justify-center gap-2"
          href="https://apihero.run"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/logo.svg" alt="API Hero Logo" width={100} height={26} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
