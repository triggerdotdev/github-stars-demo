import { repos } from "@apihero/github";
import { createEndpoint } from "@apihero/react";
import Image from "next/image";

const useGetRepository = createEndpoint(repos.getRepo);

export function StarCount({ owner, repo }: { owner: string; repo: string }) {
  const { data, status, error } = useGetRepository({
    owner,
    repo,
  });

  return (
    <>
      <div className="flex h-full w-full items-center flex-col text-2xl font-bold font-poppins text-slate-100 mb-5">
        {status === "loading" ? (
          <div className="relative">
            <Image
              className="drop-shadow-2xl opacity-40"
              width={400}
              height={400}
              src="/github-octocat-logo.png"
              alt="Github Octocat logo"
              layout="fixed"
              objectFit="contain"
            />
            <p className="absolute">"Loading..."</p>
          </div>
        ) : status === "error" ? (
          <span>Something went wrong: {error.message}</span>
        ) : (
          <>
            <p className="text-2xl font-poppins text-slate-100 mb-2">
              {owner}/{repo}
            </p>
            <div className="relative w-full h-full mb-5">
              <Image
                className="animate-star-animation "
                src="/star-large.svg"
                alt="Star"
                layout="fill"
              />
            </div>
            <h2 className="text-3xl font-bold font-poppins text-slate-100 w-full">
              {Intl.NumberFormat("en-US").format(data.stargazers_count)} stars
            </h2>
          </>
        )}
      </div>
    </>
  );
}
