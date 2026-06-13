import React from "react";

export default function CinematicCardStack({ items }) {
  // expects 3 images for the stack look
  const [a, b, c] = items;

  return (
    <div className="relative h-[260px] w-[260px]">
      {/* back */}
      <div className="absolute left-10 top-2 h-[230px] w-[170px] rotate-[10deg] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
        {c && (
          <img
            src={c.src}
            alt={c.alt}
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
        )}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* middle */}
      <div className="absolute left-6 top-6 h-[230px] w-[170px] rotate-[2deg] overflow-hidden rounded-3xl border border-white/12 bg-white/5 shadow-2xl backdrop-blur">
        {b && (
          <img
            src={b.src}
            alt={b.alt}
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />
        )}
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* front */}
      <div className="absolute left-0 top-10 h-[230px] w-[170px] rotate-[-6deg] overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-2xl backdrop-blur">
        {a && (
          <img
            src={a.src}
            alt={a.alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}

        {/* highlight */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl" />
      </div>
    </div>
  );
}