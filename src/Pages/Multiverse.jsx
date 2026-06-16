import { Link } from "react-router-dom";
import { titles } from "../data/titles";

function buildUniverseCards() {
  const map = new Map();

  for (const t of titles) {
    const key = t.universe;

    const current = map.get(key);

    if (!current) {
      map.set(key, {
        count: 1,
        poster: t.posterSrc,
        firstOrder: t.recommendedOrder,
      });
    } else {
      current.count += 1;

      if (
        t.recommendedOrder <
        current.firstOrder
      ) {
        current.firstOrder =
          t.recommendedOrder;

        current.poster = t.posterSrc;
      }
    }
  }

  return [...map.entries()]
    .map(([universe, value]) => ({
      universe,
      count: value.count,
      poster: value.poster,
    }))
    .sort((a, b) => {
      const a616 =
        a.universe.startsWith("Earth-616")
          ? 0
          : 1;

      const b616 =
        b.universe.startsWith("Earth-616")
          ? 0
          : 1;

      if (a616 !== b616) {
        return a616 - b616;
      }

      return a.universe.localeCompare(
        b.universe
      );
    });
}

export default function MultiversePage() {
  const cards = buildUniverseCards();

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background Effects */}
      <div className="pointer-events-none fixed inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,0,0,0.18),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.06),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(255,0,0,0.10),transparent_45%)]" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/65 to-black" />
      </div>

      <section className="relative mx-auto max-w-6xl px-6 pb-10 pt-14">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white/90"
        >
          ← Back to Home
        </Link>

        {/* Header */}
        <h1 className="mt-3 text-3xl font-semibold md:text-5xl">
          Explore Universes
        </h1>

        <p className="mt-3 max-w-2xl text-white/65">
          Choose an Earth. Each universe
          is its own cinematic lane.
        </p>

        {/* Universe Cards */}
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {cards.map((c) => (
            <Link
              key={c.universe}
              to={`/multiverse/${encodeURIComponent(
                c.universe
              )}`}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              {/* Background Poster */}
              <div className="absolute inset-0 opacity-25 transition group-hover:opacity-35">
                <img
                  src={c.poster}
                  alt={c.universe}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-black" />

              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/85" />

              {/* Content */}
              <div className="relative p-7">
                <div className="flex items-center justify-between gap-3">
                  <div className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[11px] tracking-widest text-white/70">
                    EARTH
                  </div>

                  <div className="text-xs text-white/60">
                    {c.count} titles
                  </div>
                </div>

                <div className="mt-4 text-2xl font-semibold">
                  {c.universe}
                </div>

                <div className="mt-2 text-sm text-white/65">
                  Enter this universe's watch
                  lane.
                </div>

                <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/5 px-4 py-2 text-sm text-white/85">
                  Enter
                  <span className="opacity-70">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}