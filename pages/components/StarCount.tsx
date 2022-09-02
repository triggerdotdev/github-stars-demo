export function StarCount({
  org,
  repo,
  status,
  starCount,
  error,
}: {
  org: string;
  repo: string;
  status: "loading" | "error" | "success";
  starCount?: number;
  error?: string;
}) {
  return (
    <>
      <h1 className="text-2xl font-bold font-poppins text-slate-100 mb-5">
        {org}/{repo}
      </h1>
      <div className="w-48 h-48 bg-black z-50 mb-5"></div>
      {status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Something went wrong: {error}</span>
      ) : (
        <h2>{starCount} stars</h2>
      )}
    </>
  );
}
