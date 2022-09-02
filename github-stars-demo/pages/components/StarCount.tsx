export function StarCount({ org, repo }: { org: string; repo: string }) {
  const { status, error, data } = useGetStars({ org, repo });
  return (
    <>
      <h1 className="text-2xl font-bold font-poppins text-slate-100 mb-5">
        {org}/{repo}
      </h1>
      <div className="w-48 h-48 bg-black z-50 mb-5"></div>
      {status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error: {JSON.stringify(error)}</span>
      ) : (
        <h2>{data?.stargazers_count} stars</h2>
      )}
    </>
  );
}
