import react from 'react';
import CinematicCardStack from '../components/CinematicCardStack';
import PosterCard from '../components/PosterCard';
import { titles } from "../data/titles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function pickFeatured() {
  const picks = [
    "iron-man-2008",
    "the-avengers-2012",
    "loki-s1",
    "spider-man-no-way-home-2021",
    "avengers-endgame-2019",
    "deadpool-and-wolverine-2024",
    "wandavision",
    "spider-man-2002",
  ];

  const byId = new Map(
    titles.map((t) => [t.id, t])
  );

  const featured = picks.map((id) => byId.get(id)).filter(Boolean);

  return featured.length >= 4 ? featured.slice(0, 8) : titles.slice(0, 8);
}


export default function Home() {
  const featured = pickFeatured();
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,0,0,0.18),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.06),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(255,0,0,0.10),transparent_45%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/65 to-black" />

      </div>

      {/* hero */}
      <section className="relative mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <img
            src="/posters/marvel_logo.jpg" // put your logo in /public/marvel-logo.png
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-contain opacity-[0.06] blur-[0.2px]"
          />
          {/* fade/mask so it feels cinematic */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80" />
        </div>
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              Recommended path: Chronological Timeline
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
              Your Marvel watch journey,
              <span className="block text-white/70">done properly.</span>
            </h1>

            <p className="mt-4 text-base text-white/65">
              Explore the timeline, jump into sagas, or hop universes in the
              Multiverse. Posters, previews, watched progress, and a clean
              “what’s next” flow.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/timeline")}
                className="rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-500"
              >
                The Timeline
              </button>

              <button
                onClick={() => navigate("/sagas")}
                className="rounded-xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
              >
                Explore Sagas
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/55">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Watch Trailer previews
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Mark watched ✓
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Phase progress
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Check what’s next
              </span>
            </div>
          </div>

          {/* right-side “mini poster stack” */}
          <CinematicCardStack
            items={[
              { src: "/posters/the-avengers-2012.jpg", alt: "The Avengers" },
              { src: "/posters/iron-man-2008.jpg", alt: "Iron Man" },
              { src: "/posters/blade-1998.jpg", alt: "Blade" },
            ]}
          />
        </div>
      </section>

      {/* featured */}
      <section className="relative mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-5 flex items-end justify-between">
          <h2 className="text-lg font-semibold text-white/90">Featured</h2>
          <span className="text-sm text-white/60">
            Hover to the Marvel Boat
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {featured.map((t, idx) => (
            <PosterCard
              key={t.id}
              id={t.id}
              title={t.name}
              badge={t.type.toUpperCase()}
              posterSrc={t.posterSrc}
              href={`/title/${t.id}`}
              priority={idx < 2}
              trailerMutedPreviewSrc={t.trailerMutedPreviewSrc}
            />
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center">
          <button
            onClick={() => navigate("/timeline")}
            className="rounded-xl border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
          >
            View full timeline →
          </button>
        </div>
      </section>
      
    </main>
  )
}