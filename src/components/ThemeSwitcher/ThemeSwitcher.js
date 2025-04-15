'use client';
import React, { useState, useEffect } from 'react';
import styles from './ThemeSwitcher.module.css';
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark-theme', savedTheme === 'dark');
      document.documentElement.classList.toggle('light-theme', savedTheme === 'light');
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark-theme');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      const newTheme = newMode ? 'dark' : 'light';
      
      localStorage.setItem('theme', newTheme);
      
      document.documentElement.classList.toggle('dark-theme', newMode);
      document.documentElement.classList.toggle('light-theme', !newMode);
      
      return newMode;
    });
  };

  return (
    <div className={styles.themeSwitcher}>
      <button onClick={toggleTheme} className={styles.button}>
        {isDarkMode ? <IoSunnyOutline /> : <IoMoonOutline />}
      </button>
    </div>
  );
};

export default ThemeSwitcher;