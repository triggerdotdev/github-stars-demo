import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { StarCount } from "./components/StarCount";
import { GetStarsInput } from "./components/GetStarsInput";
import { GithubLogo } from "./components/GithubLogo";
import { APIHeroProvider } from "./apihero/react";

const Home: NextPage = () => {
  const error = "Something went wrong";

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#020922]  to-[#2a273f]">
      <Head>
        <title>Github Star Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-top p-20 text-center z-10">
        <div className="flex flex-col items-center justify-top w-full h-96  mb-10 pt-10">
          {true ? (
            <StarCount repo="jsonhero-web" owner="apihero-run" />
          ) : (
            <GithubLogo />
          )}
        </div>
        <h1 className="text-6xl font-bold font-poppins text-slate-100">
          Look to the stars!
        </h1>

        <p className="mt-3 text-2xl font-poppins text-slate-400">
          Enter the name of a <b>Github repo</b> to see how many stars it has.
        </p>
        <GetStarsInput onSubmit={(org, repo) => console.log(org, repo)} />
        <div className="absolute bottom-0 left-0 right-0">
          {error && (
            <div className="left-[calc(50%-165px)] animate-bounce absolute top-16 bg-rose-50 px-2 py-1 text-white p-2 rounded">
              <div className="h-2 w-2 bg-rose-50 absolute -top-1 left-[calc(50%-6px)] rotate-45" />
              <p className="text-rose-500">Oops, I couldn't find that one!</p>
            </div>
          )}
        </div>
      </main>

      <footer className="flex h-10 w-full items-center justify-center bg-gradient-to-r from-[#4669E5] via-[#2B52DE] to-[#644DF5]">
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

      <div className="w-full overflow-hidden absolute h-screen top-0">
        <Image
          className="animate-[pulse_3s_ease-in-out_infinite]"
          src="/github-star-field.svg"
          alt="Star field large"
          layout="fill"
          objectFit="cover"
        />
        <Image
          className="animate-pulse"
          src="/github-star-field-small.svg"
          alt="Star field small"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <APIHeroProvider>
      <Home />
    </APIHeroProvider>
  );
}
