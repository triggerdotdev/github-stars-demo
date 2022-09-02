import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { GetStarsInput } from "./GetStarsInput";

const Home: NextPage = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-black">
      <Head>
        <title>Github Star Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="w-full overflow-hidden absolute top-0"
        style={{ height: "100vh" }}
      >
        <Image
          className="animate-pulse 4s"
          src="/github-star-field.svg"
          alt="API Hero Logo"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </div>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold text-slate-100">
          Look to the stars!
        </h1>

        <p className="mt-3 text-2xl text-slate-400">
          Enter the name of a Github repo to see how many stars it has.
        </p>
        <GetStarsInput />
      </main>

      <footer className="flex z-30 h-10 w-full items-center justify-center bg-gradient-to-r from-[#4669E5] via-[#2B52DE] to-[#644DF5]">
        <a
          className="flex items-center text-sm justify-center gap-2 text-slate-50"
          href="https://apihero.run"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image
            src="/logo-light.svg"
            alt="API Hero Logo"
            width={100}
            height={26}
          />
        </a>
      </footer>
    </div>
  );
};

export default Home;
