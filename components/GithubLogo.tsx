import Image from "next/image";

export function GithubLogo() {
  return (
    <Image
      className="drop-shadow-2xl"
      src="/github-octocat-logo.png"
      alt="Github Octocat logo"
      layout="fill"
      objectFit="contain"
    />
  );
}
