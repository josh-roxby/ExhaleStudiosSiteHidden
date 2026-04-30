export default function Home() {
  return (
    <main className="relative h-dvh w-screen overflow-hidden bg-[var(--color-ink)] text-[var(--color-moss-bright)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(111,138,106,0.18),transparent_60%)]"
      />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <Logo className="h-24 w-auto sm:h-28 md:h-32" />

        <p className="mt-10 max-w-md text-sm tracking-[0.18em] uppercase text-[var(--color-moss)] sm:text-base">
          Probably the people you&rsquo;re looking for
        </p>
      </div>

      <a
        href="https://www.instagram.com/exhale_studios"
        target="_blank"
        rel="noreferrer noopener"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-xs tracking-[0.3em] uppercase text-[var(--color-moss)] transition-colors hover:text-[var(--color-moss-bright)] sm:bottom-8 sm:text-sm"
      >
        @exhale_studios
      </a>
    </main>
  );
}

function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 120"
      role="img"
      aria-label="Exhale Studios"
      className={className}
    >
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="currentColor"
        style={{
          fontFamily:
            'ui-serif, "Cormorant Garamond", "Times New Roman", serif',
          fontWeight: 300,
          fontStyle: "italic",
          fontSize: "84px",
          letterSpacing: "0.02em",
        }}
      >
        exhale
      </text>
      <text
        x="50%"
        y="92%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="currentColor"
        opacity="0.7"
        style={{
          fontFamily: 'ui-sans-serif, system-ui, sans-serif',
          fontWeight: 400,
          fontSize: "12px",
          letterSpacing: "0.6em",
        }}
      >
        STUDIOS
      </text>
    </svg>
  );
}
