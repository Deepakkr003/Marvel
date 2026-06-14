import { create } from "zustand";

const KEY = "marvel_journey_watched_v1";

function safeRead() {
  if (typeof window === "undefined") return {};

  try {
    const raw = localStorage.getItem(KEY);

    if (!raw) return {};

    const parsed = JSON.parse(raw);

    if (!parsed || typeof parsed !== "object") {
      return {};
    }

    return parsed;
  } catch {
    return {};
  }
}

function safeWrite(next) {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(
      KEY,
      JSON.stringify(next)
    );
  } catch {}
}

export const useWatchedStore = create(
  (set, get) => ({
    watched: {},

    isHydrated: false,

    hydrate: () => {
      const next = safeRead();

      set({
        watched: next,
        isHydrated: true,
      });
    },

    toggleWatched: (id) => {
      const curr = get().watched;

      const next = {
        ...curr,
        [id]: !curr[id],
      };

      set({ watched: next });

      safeWrite(next);
    },

    setWatched: (id, value) => {
      const curr = get().watched;

      const next = {
        ...curr,
        [id]: value,
      };

      set({ watched: next });

      safeWrite(next);
    },

    markAllInList: (ids, value) => {
      const curr = get().watched;

      const next = {
        ...curr,
      };

      for (const id of ids) {
        next[id] = value;
      }

      set({ watched: next });

      safeWrite(next);
    },

    reset: () => {
      set({ watched: {} });

      safeWrite({});
    },

    isWatched: (id) => {
      return !!get().watched[id];
    },
  })
);

// Optional: auto-hydrate ONCE the first time this module is imported on client
// (prevents "empty state" flash everywhere)
if (typeof window !== "undefined") {
  // queueMicrotask is safe + avoids blocking
  queueMicrotask(() => {
    const state = useWatchedStore.getState();

    if (!state.isHydrated) {
      state.hydrate();
    }
  });
}