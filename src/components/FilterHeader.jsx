import { useEffect, useMemo, useState, useTransition } from "react";
import {
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FilterHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const pathname = location.pathname;

  const [isPending, startTransition] = useTransition();

  const type = searchParams.get("type") || "all";
  const phase = searchParams.get("phase") || "all";
  const urlQ = searchParams.get("q") || "";

  const [q, setQ] = useState(urlQ);

  useEffect(() => {
    setQ(urlQ);
  }, [urlQ]);

  function setParam(next) {
    const params = new URLSearchParams(searchParams.toString());

    if (next.type !== undefined) {
      if (next.type === "all") {
        params.delete("type");
      } else {
        params.set("type", next.type);
      }
    }

    if (next.phase !== undefined) {
      if (next.phase === "all") {
        params.delete("phase");
      } else {
        params.set("phase", next.phase);
      }
    }

    if (next.q !== undefined) {
      const clean = next.q.trim();

      if (!clean) {
        params.delete("q");
      } else {
        params.set("q", clean);
      }
    }

    const qs = params.toString();

    startTransition(() => {
      navigate(qs ? `${pathname}?${qs}` : pathname, {
        replace: true,
      });
    });
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (q !== urlQ) {
        setParam({ q });
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [q]);

  const typeOptions = useMemo(
    () => [
      ["all", "ALL"],
      ["film", "FILM"],
      ["tv", "SHOW"],
      ["oneShot", "ONESHOT"],
      ["special", "SPECIAL"],
    ],
    []
  );

  const phaseOptions = useMemo(
    () => [
      ["all", "ALL PHASES"],
      ["1", "PHASE 1"],
      ["2", "PHASE 2"],
      ["3", "PHASE 3"],
      ["4", "PHASE 4"],
      ["5", "PHASE 5"],
      ["6", "PHASE 6"],
    ],
    []
  );

  function Chip({ active, label, onClick }) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={cx(
          "rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition",
          "border backdrop-blur",
          active
            ? "border-red-500/30 bg-red-500/15 text-white"
            : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
        )}
      >
        {label}
      </button>
    );
  }

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex flex-wrap items-center gap-3">
          {/* Type Filters */}
          <div className="flex flex-wrap gap-2">
            {typeOptions.map(([key, label]) => (
              <Chip
                key={key}
                active={type === key}
                label={label}
                onClick={() => setParam({ type: key })}
              />
            ))}
          </div>

          <div className="mx-2 hidden h-6 w-px bg-white/10 md:block" />

          {/* Phase Filters */}
          <div className="flex flex-wrap gap-2">
            {phaseOptions.map(([key, label]) => (
              <Chip
                key={key}
                active={phase === key}
                label={label}
                onClick={() => setParam({ phase: key })}
              />
            ))}
          </div>

          <div className="ml-auto flex items-center gap-3">
            {/* Search */}
            <div className="relative">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search..."
                className={cx(
                  "h-10 w-[260px] rounded-full border border-white/10 bg-white/5 px-4 text-sm text-white/90 outline-none",
                  "placeholder:text-white/35 focus:border-white/20"
                )}
              />

              {isPending && (
                <div className="pointer-events-none absolute right-3 top-1/2 h-2 w-2 -translate-y-1/2 animate-pulse rounded-full bg-white/40" />
              )}
            </div>

            {/* Reset */}
            <button
              type="button"
              onClick={() =>
                setParam({
                  type: "all",
                  phase: "all",
                  q: "",
                })
              }
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 hover:bg-white/10"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}