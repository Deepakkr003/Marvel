import { useParams } from "react-router-dom";
import { titles } from "../../data/titles";
import BackButton from "../../components/BackButton";

function toYouTubeEmbed(url) {
  try {
    if (url.includes("/embed/")) return url;

    const u = new URL(url);

    const v = u.searchParams.get("v");

    if (v) {
      return `https://www.youtube.com/embed/${v}`;
    }

    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.replace("/", "");

      if (id) {
        return `https://www.youtube.com/embed/${id}`;
      }
    }

    return url;
  } catch {
    return url;
  }
}

export default function TitlePage() {
  const { id } = useParams();

  const title = titles.find(
    (t) => t.id === id
  );

  if (!title) {
    return (
      <div className="p-10 text-white">
        Title Not Found
      </div>
    );
  }

  const trailer = title.trailerUrl
    ? toYouTubeEmbed(title.trailerUrl)
    : null;

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 pt-6">
        <BackButton
          fallbackHref="/timeline"
          className=" inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition
          "
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8">
          <h1 className="text-4xl font-semibold tracking-tight">
            {title.name}
          </h1>

          <p className="mt-2 text-white/60">
            {title.type.toUpperCase()}
            {title.phase ? ` • Phase ${title.phase}` : ""}
            {" • "}
            {title.saga}
            {" • "}
            {title.universe}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[320px_1fr]">
          {/* Poster */}
          <div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img
                src={title.posterSrc}
                alt={title.name}
                className="w-full object-cover"
              />
            </div>

            {title.watchUrl?.length > 0 && (
              <div className="mt-4 space-y-2">
                <p className="text-sm text-white/60">
                  Watch on
                </p>

                <div className="flex flex-wrap gap-2">
                  {title.watchUrl.map((w) => (
                    <a
                      key={w.url}
                      href={w.url}
                      target="_blank"
                      rel="noreferrer"
                      className=" inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition
                      "
                    >
                      {w.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-semibold">
                Synopsis
              </h2>

              <p className="mt-3 leading-relaxed text-white/80">
                {title.synopsis ||
                  "No synopsis added yet."}
              </p>
            </section>

            <section className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-semibold">
                Trailer
              </h2>

              {trailer ? (
                <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
                  <div className="relative aspect-video">
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={trailer}
                      title={`${title.name} trailer`}
                      allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture
                      "
                      allowFullScreen
                    />
                  </div>
                </div>
              ) : (
                <p className="mt-3 text-white/60">
                  No trailer link added yet.
                </p>
              )}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}