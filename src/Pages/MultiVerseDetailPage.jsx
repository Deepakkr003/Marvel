import { Link, useParams, Navigate } from "react-router-dom";
import PosterCard from "../components/PosterCard";
import { titles } from "../data/titles";

export default function MultiVerseDetailPage() {
  const { universe } = useParams();

  const decodedUniverse = decodeURIComponent(
    universe || ""
  );

  const list = titles
    .filter(
      (t) => t.universe === decodedUniverse
    )
    .sort(
      (a, b) =>
        a.recommendedOrder -
        b.recommendedOrder
    );

  // Universe doesn't exist
  if (list.length === 0) {
    return <Navigate to="/multiverse" replace />;
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-8">
        {/* Back Link */}
        <Link
          to="/multiverse"
          className="text-sm text-white/60 hover:text-white/85"
        >
          ← Back to Multiverse
        </Link>

        {/* Universe Name */}
        <h1 className="mt-4 text-3xl font-semibold md:text-5xl">
          {decodedUniverse}
        </h1>

        <p className="mt-3 text-white/65">
          {list.length} titles
        </p>

        {/* Posters */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {list.map((t, idx) => (
            <PosterCard
              key={t.id}
              id={t.id}
              title={t.name}
              badge={t.type.toUpperCase()}
              posterSrc={t.posterSrc}
              href={`/title/${t.id}`}
              priority={idx < 2}
              trailerMutedPreviewSrc={
                t.trailerMutedPreviewSrc
              }
            />
          ))}
        </div>
      </section>
    </main>
  );
}