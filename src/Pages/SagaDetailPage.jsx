import { Link, useParams, Navigate } from "react-router-dom";
import PosterCard from "../components/PosterCard";
import { titles } from "../data/titles";

export default function SagaDetailPage() {
  const { saga } = useParams();

  const validSagas = [
    "Infinity",
    "Multiverse",
    "Legacy",
  ];

  const decodedSaga = decodeURIComponent(
    saga || ""
  );

  if (!validSagas.includes(decodedSaga)) {
    return <Navigate to="/sagas" replace />;
  }

  const list = titles
    .filter((t) => t.saga === decodedSaga)
    .sort(
      (a, b) =>
        a.recommendedOrder -
        b.recommendedOrder
    );

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 pb-8 pt-12">
        {/* Back Link */}
        <Link
          to="/sagas"
          className="text-sm text-white/60 hover:text-white/85"
        >
          ← Back to Sagas
        </Link>

        {/* Header */}
        <h1 className="mt-4 text-3xl font-semibold md:text-5xl">
          {decodedSaga} Saga
        </h1>

        <p className="mt-3 text-white/65">
          {list.length} titles • ordered by
          recommended journey sequence
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