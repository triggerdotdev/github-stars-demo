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
          width="192"
          height="192"
        />
      </div>

      {/* <p>"Loading..."</p> */}
      {/* <p>Something went wrong: we couldn't find the repo </p> */}
      <h2 className="text-3xl font-bold font-poppins text-slate-100 mb-">
        4,023 stars
      </h2>
      <p className="text-xl font-poppins text-slate-100 mb-5">
        apihero-run/jsonhero-web{" "}
      </p>
    </>
  );
}
