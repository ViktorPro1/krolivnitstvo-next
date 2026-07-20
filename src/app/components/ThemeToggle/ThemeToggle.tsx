// src/app/components/ThemeToggle/ThemeToggle.tsx
"use client";

import { useEffect, useState } from "react";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const initialDark = saved
      ? saved === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(initialDark);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark, mounted]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setDark((prev) => !prev)}
      aria-label="Перемкнути тему"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}
