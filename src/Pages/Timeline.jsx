import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";

import FilterHeader from "../components/FilterHeader";
import BackButton from "../components/BackButton";
import PosterCard from "../components/PosterCard";

import { titles } from "../data/titles";
import { useWatchedStore } from "../store/useWatchedStore";

function pct(done, total) {
  if (total <= 0) return 0;
  return Math.round((done / total) * 100);
}

function groupByPhase(items) {
  const map = new Map();

  for (const t of items) {
    const ph = t.phase ?? 0;

    if (!map.has(ph)) {
      map.set(ph, []);
    }

    map.get(ph).push(t);
  }

  return [...map.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([phase, list]) => ({
      phase,
      list: list.sort(
        (a, b) =>
          a.recommendedOrder - b.recommendedOrder
      ),
    }));
}

export default function TimelinePage() {
  const [searchParams] = useSearchParams();

  const watched = useWatchedStore(
    (state) => state.watched
  );

  const type = searchParams.get("type") || "all";
  const phase = searchParams.get("phase") || "all";
  const q = (
    searchParams.get("q") || ""
  ).toLowerCase();

  const grouped = useMemo(() => {
    let filtered = [...titles];

    if (type !== "all") {
      filtered = filtered.filter(
        (t) => t.type === type
      );
    }

    if (phase !== "all") {
      filtered = filtered.filter(
        (t) =>
          String(t.phase ?? "") === phase
      );
    }

    if (q) {
      filtered = filtered.filter((t) =>
        t.name.toLowerCase().includes(q)
      );
    }

    return groupByPhase(filtered);
  }, [type, phase, q]);

  const totalTitles = useMemo(
    () => grouped.reduce((acc, g) => acc + g.list.length, 0),
    [grouped]
  );

  const watchedCount = useMemo(() => {
    let count = 0;

    for (const g of grouped) {
      for (const t of g.list) {
        if (watched[t.id]) count++;
      }
    }

    return count;
  }, [grouped, watched]);

  const globalPercent = pct(
    watchedCount,
    totalTitles
  );

  const phaseStats = useMemo(() => {
    return grouped.map((g) => {
      const total = g.list.length;

      const done = g.list.reduce(
        (acc, t) => acc + (watched[t.id] ? 1 : 0),
        0
      );

      return {
        phase: g.phase,
        list: g.list,
        total,
        done,
        percent: pct(done, total),
        complete: total > 0 && done === total,
        nextUp:
          g.list.find((t) => !watched[t.id]) ||
          null,
      };
    });
  }, [grouped, watched]);

  const globalNext = useMemo(() => {
    for (const phase of phaseStats) {
      if (phase.nextUp) {
        return phase.nextUp;
      }
    }

    return null;
  }, [phaseStats]);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 pt-6">
        <BackButton
          className="
            inline-flex items-center gap-2
            rounded-full border border-white/10
            bg-white/5 px-4 py-2
            text-sm text-white/80
            hover:bg-white/10
            transition
          "
          fallbackHref="/timeline"
        />
      </div>

      <FilterHeader />

      <section className="relative mx-auto max-w-6xl px-6 pb-16 pt-8">
        {grouped.length === 0 ? (
          <p className="text-white/60">
            No results. Try clearing filters.
          </p>
        ) : (
          <>
            {/* Sticky "Next up" */}
            <div className="sticky top-0 z-40 border-b border-white/10 bg-black/75 backdrop-blur">
              <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
                <div>
                  <p className="text-xs tracking-widest text-white/60">
                    NEXT UP
                  </p>

                  <p className="text-sm font-semibold text-white/90">
                    {globalNext
                      ? globalNext.name
                      : "All caught up. You're worthy."}
                  </p>
                </div>

                <div className="w-[180px]">
                  <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="absolute left-0 top-0 h-full bg-red-500/70"
                      initial={{ width: 0 }}
                      animate={{
                        width: `${globalPercent}%`,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 20,
                      }}
                    />
                  </div>

                  <p className="mt-1 text-[11px] text-white/50">
                    {watchedCount}/{totalTitles} watched • {globalPercent}%
                  </p>
                </div>
              </div>
            </div>

            {/* Phases */}
            <div className="space-y-12 pt-8">
              {phaseStats.map(
                ({
                  phase,
                  list,
                  done,
                  total,
                  percent,
                  complete,
                }) => (
                  <div key={phase || 0}>
                    <div className="mb-3 flex items-end justify-between">
                      <div>
                        <h2 className="text-xl font-semibold">
                          {phase === 0
                            ? "Unsorted"
                            : `Phase ${phase}`}
                        </h2>

                        <p className="mt-1 text-sm text-white/55">
                          {done}/{total} completed • {percent}%
                        </p>
                      </div>

                      <div className="w-[260px]">
                        <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            className="absolute left-0 top-0 h-full bg-green-500/70"
                            initial={{ width: 0 }}
                            animate={{
                              width: `${percent}%`,
                            }}
                          />
                        </div>

                        {complete && (
                          <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70">
                            <span className="h-2 w-2 rounded-full bg-emerald-400" />
                            Completed
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                      {list.map((t, idx) => (
                        <PosterCard
                          key={t.id}
                          id={t.id}
                          title={t.name}
                          badge={t.type.toUpperCase()}
                          posterSrc={t.posterSrc}
                          href={`/title/${t.id}`}
                          priority={idx < 5}
                          trailerMutedPreviewSrc={
                            t.trailerMutedPreviewSrc
                          }
                        />
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </>
        )}
      </section>
    </main>
  );
}