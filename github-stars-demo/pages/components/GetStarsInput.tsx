import { useState } from "react";

export type GetStarsInputProps = {
  e: React.ChangeEvent<HTMLInputElement>;
};

export function GetStarsInput() {
  const [repoName, setRepoName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [stars, setStars] = useState(0);

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setStars(0);
    try {
      const response = await fetch(
        "https://api.github.com/repos/{org}/{repo}/stargazers",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ repoName }),
        }
      );
      const { stars } = await response.json();
      setStars(stars);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form className="relative flex items-center justify-center w-full mt-8">
        <input
          className="bg-slate-100 p-2 w-72 pl-3 font-mono rounded-l placeholder:text-slate-400"
          type="text"
          placeholder="Enter a repo (org/repo)"
          value={repoName}
          onChange={(e) => setRepoName(e.target.value)}
        />
        <button
          className="bg-blue-500 transition hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
          type="submit"
          onClick={handleSubmit}
        >
          {loading ? <span>Loading...</span> : <span>Get Stars</span>}
        </button>
        {error && (
          <div className="left-[calc(50%-165px)] animate-bounce absolute top-16 bg-rose-50 px-2 py-1 text-white p-2 rounded">
            <div className="h-2 w-2 bg-rose-50 absolute -top-1 left-[calc(50%-6px)] rotate-45" />
            <p className="text-rose-500">Oops, I couldn't find that one!</p>
          </div>
        )}
      </form>
    </>
  );
}
