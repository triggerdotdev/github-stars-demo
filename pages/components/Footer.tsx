import Image from "next/image";

export function Footer() {
  return (
    <footer className="flex h-10 w-full items-center justify-center bg-gradient-to-r from-[#4669E5] via-[#2B52DE] to-[#644DF5]">
      <a
        className="flex items-center text-sm justify-center gap-2 text-slate-50"
        href="https://apihero.run"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <Image
          src="/logo-light.svg"
          alt="API Hero Logo"
          width={100}
          height={26}
        />
      </a>
    </footer>
  );
}
