export default function Home() {
  return (
    <main className="relative h-dvh w-screen overflow-hidden bg-black text-white">
      {/* cosmic glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_50%,rgba(61,220,79,0.10),transparent_70%)]"
      />
      {/* starfield */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.55) 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "120px 120px, 200px 200px",
          backgroundPosition: "0 0, 60px 90px",
        }}
      />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <div className="flex items-center gap-4 sm:gap-6">
          <FlameMark className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16" />
          <h1 className="font-black uppercase leading-none tracking-[-0.02em] text-[clamp(3rem,12vw,9rem)]">
            Exhale
          </h1>
        </div>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.55em] text-[var(--color-fuel)] sm:text-sm">
          Studios
        </p>

        <p className="mt-10 max-w-md text-sm font-medium uppercase tracking-[0.18em] text-white/70 sm:text-base">
          Probably the people you&rsquo;re looking for
        </p>
      </div>

      <a
        href="https://www.instagram.com/exhale_studios"
        target="_blank"
        rel="noreferrer noopener"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-xs font-semibold tracking-[0.3em] uppercase text-[var(--color-fuel)] transition-opacity hover:opacity-80 sm:bottom-8 sm:text-sm"
      >
        @exhale_studios
      </a>
    </main>
  );
}

function FlameMark({ className }: { className?: string }) {
  return (
    <span
      className={
        "inline-flex items-center justify-center rounded-md bg-[var(--color-fuel)] " +
        (className ?? "")
      }
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="h-[60%] w-[60%]" fill="black">
        <path d="M12 2c.6 3.2-1.4 4.6-2.7 6.2C8.1 9.6 7 11 7 13.5 7 17.6 10.1 21 14 21c3.9 0 7-3.4 7-7.5 0-3.5-2-5.4-3.7-7C15.7 5 14.4 3.6 14 2c-.6 1.6-1.5 3.2-2 5-.5-1.6-.5-3.4 0-5z" />
      </svg>
    </span>
  );
}
