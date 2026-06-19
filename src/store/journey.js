import { create } from "zustand";

const KEY = "marvel_journey_watched_v1";

export const useJourney = create((set, get) => ({
  // Stores watched titles
  watched: {},

  // Prevents multiple hydrations
  hydrated: false,

  // Toggle watched/unwatched status
  toggleWatched: (id) => {
    const current = get().watched;

    const updated = {
      ...current,
      [id]: !current[id],
    };

    // Update Zustand state
    set({
      watched: updated,
    });

    // Save to browser storage
    try {
      localStorage.setItem(
        KEY,
        JSON.stringify(updated)
      );
    } catch (error) {
      console.error(
        "Failed to save progress:",
        error
      );
    }
  },

  // Load saved progress from localStorage
  hydrate: () => {
    // Prevent repeated hydration
    if (get().hydrated) return;

    try {
      const raw = localStorage.getItem(KEY);

      if (raw) {
        set({
          watched: JSON.parse(raw),
          hydrated: true,
        });
      } else {
        set({
          hydrated: true,
        });
      }
    } catch (error) {
      console.error(
        "Failed to load progress:",
        error
      );

      set({
        hydrated: true,
      });
    }
  },

  // Optional: clear all progress
  resetJourney: () => {
    try {
      localStorage.removeItem(KEY);

      set({
        watched: {},
      });
    } catch (error) {
      console.error(
        "Failed to reset journey:",
        error
      );
    }
  },
}));