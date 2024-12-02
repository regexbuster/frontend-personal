"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import style from "./ThemeToggle.module.css";

const ThemeType = {
  LIGHT: "light",
  DARK: "dark",
};

function ThemeToggle() {
  const [theme, setTheme] = useState(ThemeType.LIGHT);
  const router = useRouter();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.body.className = storedTheme;
    }
  }, []);

  const toggleTheme = () => {
    const newTheme =
      theme === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT;
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem("theme", newTheme);
    router.refresh();
  };

  return (
    <>
      <button onClick={toggleTheme} className={style.toggle}>
        Theme Switch
      </button>
    </>
  );
}

export default ThemeToggle;
