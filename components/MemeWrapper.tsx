"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";

import { MemeTable } from "@/components/MemeTable";
import { MemeList } from "@/components/MemeList";
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
        if (Array.isArray(parsedMemes) && parsedMemes.length === 0) {
          setMemes(initialMemes);
          Cookies.set("memes", JSON.stringify(initialMemes), { expires: 7 });
        } else {
          setMemes(parsedMemes);
        }
      } catch (error) {
        console.error("Error parsing cookies:", error);
        setMemes(initialMemes);
        Cookies.set("memes", JSON.stringify(initialMemes), { expires: 7 });
      }
    } else {
      setMemes(initialMemes);
      Cookies.set("memes", JSON.stringify(initialMemes), { expires: 7 });
    }
  }, [initialMemes]);

  useEffect(() => {
    if (memes.length === 0) {
      setMemes(initialMemes);
      Cookies.set("memes", JSON.stringify(initialMemes), { expires: 7 });
    } else {
      Cookies.set("memes", JSON.stringify(memes), { expires: 7 });
    }
  }, [memes, initialMemes]);

  return mode === "table" ? (
    <MemeTable initialMemes={memes} setMemes={setMemes} />
  ) : (
    <MemeList initialMemes={memes} />
  );
};