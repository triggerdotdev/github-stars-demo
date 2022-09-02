import Image from "next/image";

export function GithubLogo() {
  return (
    <Image
      className="drop-shadow-2xl"
      width={400}
      height={400}
      src="/github-octocat-logo.png"
      alt="Github Octocat logo"
      layout="fixed"
      objectFit="contain"
    />
  );
}
