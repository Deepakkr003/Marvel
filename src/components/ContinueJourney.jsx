"use client";

import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { titles } from "../data/titles";
import { useJourney } from "../store/journey";

export default function ContinueJourney() {
  const watched = useJourney((s) => s.watched);
  const navigate = useNavigate();

  const nextUp = useMemo(() => {
    const sorted = titles
      .slice()
      .sort((a, b) => a.recommendedOrder - b.recommendedOrder);

    return sorted.find((t) => !watched[t.id]);
  }, [watched]);

  const progress = useMemo(() => {
    const total = titles.length || 1;

    const done = titles.reduce(
      (acc, t) => acc + (watched[t.id] ? 1 : 0),
      0
    );

    const pct = Math.round((done / total) * 100);

    return { done, total, pct };
  }, [watched]);

  const backdropPoster =
    nextUp?.posterSrc ??
    "/posters/the-avengers-2012.jpg";

  if (!nextUp) {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="tracking-widest text-xs text-white/60">
          CONTINUE JOURNEY
        </div>

        <div className="mt-2 text-xl font-semibold text-white/90">
          You're caught up.
        </div>

        <div className="mt-1 text-sm text-white/60">
          Legend behaviour.
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            onClick={() => navigate("/journey")}
            className="rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-500"
          >
            Start the Marvelous Journey
          </button>

          <button
            onClick={() => navigate("/timeline")}
            className="rounded-xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
          >
            View Timeline
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      {/* blended cinematic background */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <img
          src={backdropPoster}
          alt=""
          className="absolute inset-0 h-full w-full object-cover blur-[2px] scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-black" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(239,68,68,0.20),transparent_50%)]" />
      </div>

      <div className="relative p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          {/* left */}
          <div>
            <div className="tracking-widest text-xs text-white/60">
              CONTINUE JOURNEY
            </div>

            <div className="mt-2 text-2xl font-semibold">
              {nextUp.name}
            </div>

            <div className="mt-1 text-sm text-white/60">
              Next recommended in Chronological order
            </div>

            {/* progress bar */}
            <div className="mt-5 max-w-md">
              <div className="flex items-center justify-between text-xs text-white/55">
                <span>Campaign progress</span>

                <span>
                  {progress.done}/{progress.total} (
                  {progress.pct}%)
                </span>
              </div>

              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full bg-red-600 transition-all"
                  style={{
                    width: `${progress.pct}%`,
                  }}
                />
              </div>
            </div>

            {/* buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/journey")}
                className="rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-500"
              >
                Start the Marvelous Journey
              </button>

              <button
                onClick={() => navigate("/timeline")}
                className="rounded-xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
              >
                View Timeline
              </button>
            </div>
          </div>

          {/* right mini "next up" poster tile */}
          <div className="hidden md:block">
            <div className="relative h-28 w-48 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img
                src={nextUp.posterSrc}
                alt={nextUp.name}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70" />

              <div className="absolute bottom-2 left-2 right-2 text-xs text-white/85">
                Next:{" "}
                <span className="font-semibold">
                  {nextUp.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* subtle bottom glow edge */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
    </div>
  );
}