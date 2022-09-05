import { repos } from "@apihero/github";
import { createEndpoint } from "../apihero/react";
import Image from "next/image";

const useGetRepository = createEndpoint(repos.getRepos);

export function StarCount({ owner, repo }: { owner: string; repo: string }) {
  const { data, status, error } = useGetRepository({
    owner,
    repo,
  });

  return (
    <>
      <div className="flex h-full flex-col text-2xl font-bold font-poppins text-slate-100 mb-5">
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
            <div className="relative w-48 h-48 mb-5">
              <Image
                className="animate-star-animation"
                src="/star-large.svg"
                alt="Star"
                width="192"
                height="192"
              />
              <h2 className="absolute top-0 left-0">
                {data.stargazers_count} stars
              </h2>
            </div>
          </>
        )}
      </div>
      <h1 className="text-xl font-poppins text-slate-100 mb-5">
        {owner}/{repo}
      </h1>
    </>
  );
}
