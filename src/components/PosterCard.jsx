import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { useWatchedStore } from "../store/useWatchedStore.js";

export default function PosterCard({
  id,
  title,
  subtitle,
  posterSrc,
  badge,
  href,
  priority = false,
  trailerMutedPreviewSrc,
}){
  const [loaded, setLoaded] = useState(false);

  const isWatched = useWatchedStore((s) => !!s.watched[id]);
  const toggleWatched = useWatchedStore((s) => s.toggleWatched);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useTransform(my, [-40, 40], [10, -10]);
  const rotateY = useTransform(mx, [-40, 40], [-10, 10]);

  const glowId = useMemo(
    () => `glow-${title.replace(/\s+/g, "-").toLowerCase()}`,
    [title]
  );

  function onMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    mx.set(Math.max(-40, Math.min(40, x / 6)));
    my.set(Math.max(-40, Math.min(40, y / 6)));
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div
      className="group relative w-full text-left"
      style={{ transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
    >

      {/* Glow Effect */}
      <div
        id={glowId}
        className="pointer-events-none absolute -inset-3 rounded-2xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: isWatched
            ? "radial-gradient(650px circle at 50% 50%, rgba(34,197,94,0.28), rgba(34,197,94,0.06), transparent 60%)"
            : "radial-gradient(650px circle at 50% 50%, rgba(255,0,0,0.22), rgba(255,0,0,0.05), transparent 60%)",
        }}
      />

      {/* Watched Button */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleWatched(id);
        }}
        className={[
          "absolute right-3 top-3 z-30 grid h-10 w-10 place-items-center rounded-full border backdrop-blur transition",
          isWatched
            ? "border-green-400/30 bg-green-500/15 hover:bg-green-500/20"
            : "border-white/15 bg-black/40 hover:bg-black/55",
        ].join(" ")}
        aria-label={isWatched ? "Marked watched" : "Mark as watched"}
        title={isWatched ? "Watched" : "Mark watched"}
      >
        <span
          className={[
            "text-lg leading-none",
            isWatched ? "text-green-300" : "text-white/85",
          ].join(" ")}
        >
          ✓
        </span>
      </button>

      {/* Card Link */}
      <Link
        to={href}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="block"
      >
        <motion.div
          className={[
            "relative overflow-hidden rounded-2xl border bg-zinc-950/60 shadow-xl",
            isWatched ? "border-green-400/20" : "border-white/10",
          ].join(" ")}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 18,
          }}
        >
          <div className="relative aspect-[2/3] w-full">
            {!loaded && (
              <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-zinc-800/60 via-zinc-900/60 to-zinc-800/60" />
            )}

            <img
              src={posterSrc}
              alt={title}
              loading={priority ? "eager" : "lazy"}
              onLoad={() => setLoaded(true)}
              className={[
                "absolute inset-0 h-full w-full object-cover transition duration-500",
                loaded ? "opacity-100" : "opacity-0",
                "group-hover:scale-[1.06] group-hover:contrast-105",
              ].join(" ")}
            />

            {trailerMutedPreviewSrc && (
              <video
                className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                src={trailerMutedPreviewSrc}
                muted
                playsInline
                loop
                preload="none"
                onMouseEnter={(e) =>
                  e.currentTarget.play().catch(() => {})
                }
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/0" />

            {badge && (
              <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[11px] tracking-widest text-white/90 backdrop-blur">
                {badge}
              </div>
            )}
          </div>

          <div className="p-4">
            <h3 className="text-base font-semibold leading-tight text-white/95">
              {title}
            </h3>

            {subtitle && (
              <p className="mt-1 line-clamp-1 text-sm text-white/60">
                {subtitle}
              </p>
            )}

            <p className="mt-3 text-xs text-white/55">
              {isWatched
                ? "Completed • Nice."
                : "Hover to preview • Click for details"}
            </p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}