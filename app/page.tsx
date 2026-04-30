import Image from "next/image";
import { Instagram } from "lucide-react";

export default function Home() {
  return (
    <main className="relative h-dvh w-screen overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_50%,rgba(61,220,79,0.08),transparent_70%)]"
      />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <Image
          src="/exhale-logo-white.png"
          alt="Exhale Studios"
          width={909}
          height={866}
          priority
          className="h-40 w-auto sm:h-52 md:h-64"
        />
        <p className="mt-8 text-sm font-light tracking-wide text-white/60 sm:text-base">
          Probably the people you&rsquo;re looking for
        </p>
      </div>

      <a
        href="https://www.instagram.com/exhale_studios"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Exhale Studios on Instagram"
        className="absolute bottom-6 left-1/2 z-10 inline-flex -translate-x-1/2 items-center gap-2 text-sm text-white/70 transition-colors hover:text-[var(--color-fuel)] sm:bottom-8"
      >
        <Instagram className="h-4 w-4" strokeWidth={1.75} />
        <span className="font-light tracking-wide">@exhale_studios</span>
      </a>
    </main>
  );
}
