import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import FilterHeader from "../components/FilterHeader";
import BackButton from "../components/BackButton";
import { titles } from "../data/titles";

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
        (t) => String(t.phase ?? "") === phase
      );
    }

    if (q) {
      filtered = filtered.filter((t) =>
        t.name.toLowerCase().includes(q)
      );
    }

    return groupByPhase(filtered);
  }, [type, phase, q]);

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
          <div>
            <p>body</p>
          </div>
        )}
      </section>
    </main>
  );
}