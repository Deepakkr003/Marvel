import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { titles } from "../data/titles";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../components/ui/command";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    function onKeyDown(e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const sorted = useMemo(() => {
    return titles
      .slice()
      .sort((a, b) => a.recommendedOrder - b.recommendedOrder);
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search titles… (type Thor)" />

      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>

        <CommandGroup heading="Titles">
          {sorted.map((t) => (
            <CommandItem
              key={t.id}
              value={t.name}
              onSelect={() => {
                setOpen(false);
                navigate(`/title/${t.id}`);
              }}
            >
              <div className="flex w-full items-center justify-between">
                <span>{t.name}</span>

                <span className="text-xs text-muted-foreground">
                  {t.type.toUpperCase()}
                </span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}