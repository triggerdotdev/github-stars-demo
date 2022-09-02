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
      <div className="w-48 h-48 mb-5">
        <Image
          className="animate-star-animation "
          src="/star-large.svg"
          alt="Star"
          width="192"
          height="192"
        />
      </div>
      <div className="text-2xl font-bold font-poppins text-slate-100 mb-5">
        {status === "loading" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Something went wrong: {error.message}</span>
        ) : (
          <h2>{data.stargazers_count} stars</h2>
        )}
      </div>
      <h1 className="text-xl font-poppins text-slate-100 mb-5">
        {owner}/{repo}
      </h1>
    </>
  );
}
