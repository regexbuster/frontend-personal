'use client';

import { useState, useEffect } from 'react';

import style from './ThemeToggle.module.css';

const ThemeType = {
    LIGHT: 'light',
    DARK: 'dark',
};

function ThemeToggle() {
    const [theme, setTheme] = useState(ThemeType.LIGHT);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
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
        localStorage.setItem('theme', newTheme);
    };

    return (
        <>
            <button onClick={toggleTheme} className={style.toggle}></button>
        </>
    );
}

export default ThemeToggle;
