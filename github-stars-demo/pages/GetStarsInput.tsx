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
      const response = await fetch("/orgs/{org}/repos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ repoName }),
      });
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
      <form className="flex flex-col items-center justify-center w-full mt-8 px-20 text-center">
        <input
          className="border-2 border-gray-300 p-2 rounded-lg"
          type="text"
          placeholder="Repo name"
          value={repoName}
          onChange={(e) => setRepoName(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          type="submit"
          onClick={handleSubmit}
        >
          Get Stars
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {stars > 0 && <p>{stars} stars</p>}
    </>
  );
}
