import { useNavigate } from "react-router-dom";

function Card({ icon, title, children }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-[0_20px_80px_rgba(0,0,0,0.65)] backdrop-blur">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
          {icon}
        </div>

        <div>
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>

          <div className="mt-2 text-sm leading-relaxed text-white/60">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionShell({ title, subtitle }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 shadow-[0_24px_90px_rgba(0,0,0,0.7)] backdrop-blur">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
        {title}
      </h1>

      <p className="mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-white/60">
        {subtitle}
      </p>
    </div>
  );
}

export default function LegalPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-black text-white">
      {/* background glow */}
      <div className="pointer-events-none fixed inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,0,0,0.18),transparent_45%),radial-gradient(circle_at_75%_20%,rgba(255,255,255,0.05),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(255,0,0,0.12),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-10">
        {/* top bar */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition"
          >
            ← Back to Home
          </button>

          <div className="text-xs text-white/40">
            Last updated: {new Date().getFullYear()}
          </div>
        </div>

        {/* header */}
        <SectionShell
          title="Legal Information"
          subtitle="This site operates as a content discovery experience. Please review the information below to understand how we operate and our policies regarding external content."
        />

        {/* cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white/80"
              >
                <path
                  d="M7 7h10M7 11h10M7 15h7"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M6 3h9l3 3v15a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            }
            title="No Hosting Policy"
          >
            We do not upload, store, or host media files. Any watch links originate
            from third-party platforms and are provided for convenience.
          </Card>

          <Card
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white/80"
              >
                <path
                  d="M12 3v18M3 12h18"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M8 7h8v10H8z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  opacity="0.7"
                />
              </svg>
            }
            title="Content Removal Requests"
          >
            Because we do not host files, we cannot remove content directly. For
            takedowns, please contact the original hosting platform that controls
            the media.
          </Card>

          <Card
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white/80"
              >
                <path
                  d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M9.5 12.5l1.8 1.8 3.7-4.2"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            title="Copyright Concerns"
          >
            We respect intellectual property rights and operate within legal
            boundaries. If you’re a rights holder, contact us and we’ll help
            direct you to the source where the material is hosted.
          </Card>

          <Card
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white/80"
              >
                <path
                  d="M12 9v4m0 4h.01"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M10.3 4.3 2.8 18.2A2 2 0 0 0 4.6 21h14.8a2 2 0 0 0 1.8-2.8L13.7 4.3a2 2 0 0 0-3.4 0Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            }
            title="Disclaimer"
          >
            We use publicly accessible data and links. We claim no ownership or
            control over third-party media. Users are responsible for how they
            interact with external services.
          </Card>
        </div>

        {/* contact */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-9 shadow-[0_24px_90px_rgba(0,0,0,0.7)] backdrop-blur">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white/80"
              >
                <path
                  d="M4 6h16v12H4z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  opacity="0.9"
                />
                <path
                  d="M4 7l8 6 8-6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="flex-1">
              <h2 className="text-xl font-semibold tracking-tight">
                Contact Information
              </h2>

              <p className="mt-3 text-sm text-white/60">
                For general inquiries or to report issues:{" "}
                <span className="text-white/85 font-semibold">
                  contact@yourdomain.com
                </span>
              </p>

              <p className="mt-4 text-sm leading-relaxed text-white/50">
                Important: This site does not host any content. We aggregate
                links to publicly available media from third-party sources. For
                content-specific matters, please reach out directly to the
                websites hosting the files, as they have full control over their
                content.
              </p>

              <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/35">
                © {new Date().getFullYear()} Marvel Journey
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
