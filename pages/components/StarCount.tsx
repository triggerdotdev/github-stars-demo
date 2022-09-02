import { repos } from "@apihero/github";
import { createEndpoint } from "../apihero/react";

const useGetRepository = createEndpoint(repos.getRepos);

export function StarCount({ owner, repo }: { owner: string; repo: string }) {
  const { data, status, error } = useGetRepository({
    owner,
    repo,
  });

  return (
    <>
      <h1 className="text-2xl font-bold font-poppins text-slate-100 mb-5">
        {owner}/{repo}
      </h1>
      <div className="w-48 h-48 bg-black z-50 mb-5"></div>
      {status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Something went wrong: {error.message}</span>
      ) : (
        <h2>{data.stargazers_count} stars</h2>
      )}
    </>
  );
}
