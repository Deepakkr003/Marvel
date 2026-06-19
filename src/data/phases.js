import { titles } from "./titles";

export const PHASES = [
  {
    key: "UNSORTED",
    title: "Prologue",
    subtitle: "The essentials before the saga locks in.",
    bg: "/journey/unsorted.jpg",
    theme: {
      accent: "#22c55e", // emerald
      nebula: "#052e1a", // deep green-black
    },
    filter: (t) => !t.phase || t.phase === 0,
  },

  {
    key: "PHASE_1",
    title: "Phase 1",
    subtitle: "The origin spark.",
    bg: "/journey/phase-1.jpg",
    theme: {
      accent: "#ef4444", // red
      nebula: "#1b0a12", // deep red-black
    },
    filter: (t) => t.phase === 1,
  },

  {
    key: "PHASE_2",
    title: "Phase 2",
    subtitle: "The world expands.",
    bg: "/journey/phase-2.jpg",
    theme: {
      accent: "#f59e0b", // amber
      nebula: "#1a1207", // warm dark
    },
    filter: (t) => t.phase === 2,
  },

  {
    key: "PHASE_3",
    title: "Phase 3",
    subtitle: "The war for everything.",
    bg: "/journey/phase-3.jpg",
    theme: {
      accent: "#8b5cf6", // violet
      nebula: "#0b0620", // deep violet-black
    },
    filter: (t) => t.phase === 3,
  },

  {
    key: "PHASE_4",
    title: "Phase 4",
    subtitle: "The multiverse blooms.",
    bg: "/journey/phase-4.jpg",
    theme: {
      accent: "#06b6d4", // cyan
      nebula: "#041a20", // deep cyan-black
    },
    filter: (t) => t.phase === 4,
  },

  {
    key: "PHASE_5",
    title: "Phase 5",
    subtitle: "Incursions begin.",
    bg: "/journey/phase-5.jpg",
    theme: {
      accent: "#ec4899", // pink
      nebula: "#1a0713", // deep magenta-black
    },
    filter: (t) => t.phase === 5,
  },

  {
    key: "PHASE_6",
    title: "Phase 6",
    subtitle: "The endgame approaches.",
    bg: "/journey/phase-6.jpg",
    theme: {
      accent: "#60a5fa", // blue
      nebula: "#050b1a", // deep blue-black
    },
    filter: (t) => t.phase === 6,
  },
];