import { AnimatePresence, motion } from "framer-motion";

export default function TitleDetailsModal({
  open,
  title,
  isWatched,
  hasNext,
  onClose,
  onToggleWatched,
  onGoNext,
}) {
  if (!open || !title) return null;

  const watchLinks = title.watchUrl ?? [];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[70]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <button
          aria-label="Close"
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{
            opacity: 0,
            y: 16,
            scale: 0.985,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 16,
            scale: 0.985,
          }}
          transition={{
            duration: 0.18,
          }}
          className=" absolute left-1/2 top-1/2 w-[min(920px,92vw)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl
          "
        >
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr]">
            {/* Poster */}
            <div className="relative aspect-[2/3] w-full bg-black md:aspect-auto md:h-full">
              <img
                src={title.posterSrc}
                alt={title.name}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div
                    className=" inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[11px] tracking-widest text-white/70
                    "
                  >
                    TITLE DETAILS
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold text-white">
                    {title.name}
                  </h3>

                  <p className="mt-1 text-sm text-white/60">
                    {[
                      title.year
                        ? String(title.year)
                        : null,
                      title.type?.toUpperCase(),
                      title.phase
                        ? `Phase ${title.phase}`
                        : null,
                      title.universe,
                    ]
                      .filter(Boolean)
                      .join(" • ")}
                  </p>

                  {hasNext && (
                    <p className="mt-2 text-xs text-white/60">
                      {isWatched
                        ? "Cleared. You can move to the next title."
                        : "This is your next title. Watch it (or mark watched) to unlock Next."}
                    </p>
                  )}
                </div>

                <button
                  onClick={onClose}
                  className=" rounded-xl border border-white/12 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10
                  "
                >
                  Close
                </button>
              </div>

              {/* Synopsis */}
              {title.synopsis && (
                <p className="mt-5 text-sm leading-6 text-white/75">
                  {title.synopsis}
                </p>
              )}

              {/* Actions */}
              <div className="mt-6 flex flex-wrap gap-3">
                {watchLinks.length > 0 &&
                  watchLinks.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      onMouseDown={() => {
                        if (!isWatched) {
                          onToggleWatched();
                        }
                      }}
                      onTouchStart={() => {
                        if (!isWatched) {
                          onToggleWatched();
                        }
                      }}
                      className=" rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition hover:bg-red-500
                      "
                    >
                      {isWatched
                        ? "Watch again"
                        : "Watch"}
                      {link.label
                        ? ` on ${link.label}`
                        : ""}
                    </a>
                  ))}

                {/* Trailer */}
                {title.trailerUrl && (
                  <a
                    href={title.trailerUrl}
                    target="_blank"
                    rel="noreferrer"
                    className=" rounded-xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10
                    "
                  >
                    Trailer
                  </a>
                )}

                {/* Watched */}
                <button
                  onClick={onToggleWatched}
                  className=" rounded-xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10
                  "
                >
                  {isWatched
                    ? "Unmark watched"
                    : "Mark as watched"}
                </button>

                {/* Next */}
                {hasNext && (
                  <button
                    onClick={() => {
                      if (!isWatched) return;
                      onGoNext();
                    }}
                    disabled={!isWatched}
                    className={` rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg transition
                      ${
                        isWatched
                          ? "bg-emerald-600 shadow-emerald-600/25 hover:bg-emerald-500"
                          : "bg-white/10 text-white/40 shadow-none cursor-not-allowed"
                      }
                    `}
                  >
                    Next →
                  </button>
                )}
              </div>

              <div className="mt-5 text-xs text-white/50">
                Campaign order: #
                {title.recommendedOrder}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}