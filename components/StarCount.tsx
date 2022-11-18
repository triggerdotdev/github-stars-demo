import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Spinner } from "./Spinner";

export function StarCount({ owner, repo }: { owner: string; repo: string }) {
  const { data, status, error } = useQuery({
    queryKey: ["repo", owner, repo],
    queryFn: async () => {
      const response = await fetch(
        "https://api.github.com/repos/" + owner + "/" + repo
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  return (
    <>
      <div className="flex h-full w-full flex-col text-2xl mb-5 items-center justify-top">
        {status === "loading" ? (
          <div className="relative w-96 h-96">
            <Spinner />
          </div>
        ) : status === "error" ? (
          <div className="flex justify-center flex-col flex-grow">
            <h2 className="text-8xl font-mono text-slate-100 mb-2">🫤</h2>
            <p className="text-2xl font-mono text-slate-100 mb-2">
              {/* Oops, repo {error.message.toLowerCase()}. */}
              Oops, repo there was an error.
            </p>
          </div>
        ) : (
          <>
            <p className="text-2xl font-mono text-slate-100 mb-2">
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
