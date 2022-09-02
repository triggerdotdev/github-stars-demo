import Image from "next/image";

export function BackgroundStars() {
  return (
    <div className="w-full overflow-hidden absolute h-screen top-0">
      <Image
        className="animate-[pulse_3s_ease-in-out_infinite]"
        src="/github-star-field.svg"
        alt="Star field large"
        layout="fill"
        objectFit="cover"
      />
      <Image
        className="animate-pulse"
        src="/github-star-field-small.svg"
        alt="Star field small"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
