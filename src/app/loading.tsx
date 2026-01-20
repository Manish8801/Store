import Image from "next/image";

export default function LoadingPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Image
        alt="loading"
        src={"/assets/loader.gif"}
        height={48}
        width={48}
        unoptimized
      />
    </div>
  );
}
