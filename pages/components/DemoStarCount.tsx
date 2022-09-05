import { repos } from "@apihero/github";
import { createEndpoint } from "../apihero/react";
import Image from "next/image";

export function DemoStarCount({
  owner,
  repo,
}: {
  owner: string;
  repo: string;
}) {
  return (
    <>
      <div className="mb-5">
        <Image
          className="animate-star-animation "
          src="/star-large.svg"
          alt="Star"
          width="250"
          height="250"
        />
      </div>

      {/* <p>"Loading..."</p> */}
      {/* <p>Something went wrong: we couldn't find the repo </p> */}
      <p className="text-2xl font-poppins text-slate-100 mb-2">
        apihero-run/jsonhero-web{" "}
      </p>
      <h2 className="text-3xl font-bold font-poppins text-slate-100">
        4,023 GitHub stars
      </h2>
    </>
  );
}
