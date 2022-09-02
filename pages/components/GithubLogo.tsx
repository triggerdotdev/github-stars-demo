import Image from "next/image";

export function GithubLogo() {
  return (
    <Image
      width={400}
      height={400}
      className=""
      src="/github-octocat-logo.png"
      alt="Github Octocat logo"
      layout="fixed"
      objectFit="contain"
    />
  );
}
