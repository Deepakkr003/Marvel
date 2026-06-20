import { useSound } from "../components/SoundProvider";

export default function SoundToggle() {
  const { enabled, toggle } = useSound();

  return (
    <button
      onClick={toggle}
      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10 transition"
    >
      Sound: {enabled ? "ON" : "OFF"}
    </button>
  );
}