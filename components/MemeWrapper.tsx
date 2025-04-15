"use client";

import { useState, useEffect } from "react";
import { MemeTable } from "@/components/MemeTable";
import { MemeList } from "@/components/MemeList";
import Cookies from "js-cookie";
import { Meme } from "@/data/memes";

type Props = {
  initialMemes: Meme[];
  mode: "table" | "list";
};

export const MemeWrapper = ({ initialMemes, mode }: Props) => {
  const [memes, setMemes] = useState<Meme[]>(initialMemes);

  // Синхронізація з cookies при монтуванні
  useEffect(() => {
    const savedMemes = Cookies.get("memes");
    if (savedMemes) {
      try {
        const parsedMemes = JSON.parse(savedMemes);
        setMemes(parsedMemes);
      } catch (error) {
        console.error("Error parsing cookies:", error);
        setMemes(initialMemes);
      }
    }
  }, [initialMemes]);

  // Збереження в cookies при зміні memes
  useEffect(() => {
    Cookies.set("memes", JSON.stringify(memes), { expires: 7 });
  }, [memes]);

  return mode === "table" ? (
    <MemeTable initialMemes={memes} setMemes={setMemes} />
  ) : (
    <MemeList initialMemes={memes} />
  );
};