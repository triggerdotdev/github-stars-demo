import { useState } from "react";

export type GetStarsInputProps = {
  onSubmit: (orgRepo: string) => void;
};

export function GetStarsInput({ onSubmit }: GetStarsInputProps) {
  const [orgRepo, setOrgRepo] = useState("");

  return (
    <>
      <div className="relative flex items-center justify-center w-full mt-8">
        <input
          className="bg-slate-100 p-2 w-72 pl-3 font-mono rounded-l placeholder:text-slate-400"
          type="text"
          placeholder="Enter a repo (org/repo)"
          value={orgRepo}
          onChange={(e) => setOrgRepo(e.target.value)}
        />
        <button
          className="bg-blue-500 transition hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
          onClick={() => {
            onSubmit(orgRepo);
          }}
        >
          Get Stars
        </button>
      </div>
    </>
  );
}
