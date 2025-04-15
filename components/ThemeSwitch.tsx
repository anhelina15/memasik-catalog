"use client";

import { useState, useEffect } from "react";
import { Switch } from "@heroui/switch";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export const ThemeSwitch = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <Switch
      isSelected={isDark}
      onChange={toggleTheme}
      thumbIcon={isDark ? <MoonIcon className="w-4 h-4" /> : <SunIcon className="w-4 h-4" />}
      aria-label="Toggle dark mode"
      className="cursor-pointer"
    />
  );
};