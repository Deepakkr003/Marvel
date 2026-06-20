import { createContext, useContext, useEffect, useMemo, useRef, useState, } from "react";

const Ctx = createContext(null);

const KEY = "marvel_journey_sound_v1";

export function SoundProvider({ children }) {
  const [enabled, setEnabled] = useState(true);

  const sounds = useMemo(() => {
    if (typeof Audio === "undefined") return null;

    return {
      click: new Audio("/theme_music/doomsday_theme.mp3"),
      open: new Audio("/theme_music/doomsday_theme.mp3"),
    };
  }, []);

  const bgAudioRef = useRef(null);
  const unlockedRef = useRef(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);

      if (raw != null) {
        setEnabled(raw === "1");
      }
    } catch {}
  }, []);

  useEffect(() => {
    const audio = new Audio("/theme_music/doomsday_theme.mp3");

    audio.loop = true;
    audio.volume = 0.85;
    audio.muted = true;
    audio.preload = "auto";

    bgAudioRef.current = audio;

    return () => {
      audio.pause();
      bgAudioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const bg = bgAudioRef.current;

    if (!bg) return;

    bg.muted = !enabled;

    if (!bg.muted && unlockedRef.current) {
      bg.play().catch(() => {});
    }
  }, [enabled]);

  useEffect(() => {
    function unlock() {
      if (unlockedRef.current) return;

      unlockedRef.current = true;

      const bg = bgAudioRef.current;

      if (bg && enabled) {
        bg.muted = false;
        bg.play().catch(() => {});
      }

      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("touchstart", unlock);
    }

    window.addEventListener("pointerdown", unlock);
    window.addEventListener("keydown", unlock);
    window.addEventListener("touchstart", unlock);

    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("touchstart", unlock);
    };
  }, [enabled]);

  const value = {
    enabled,

    toggle: () => {
      setEnabled((prev) => {
        const next = !prev;

        localStorage.setItem(KEY, next ? "1" : "0");

        const bg = bgAudioRef.current;

        if (bg) {
          bg.muted = !next;

          if (next && unlockedRef.current) {
            bg.play().catch(() => {});
          }

          if (!next) {
            bg.pause();
          }
        }

        return next;
      });
    },

    play: (name) => {
      if (!enabled || !sounds) return;

      const audio = sounds[name];

      audio.currentTime = 0;
      audio.volume = 0.25;

      audio.play().catch(() => {});
    },
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useSound() {
  const value = useContext(Ctx);

  if (!value) {
    throw new Error("useSound must be used inside SoundProvider");
  }

  return value;
}