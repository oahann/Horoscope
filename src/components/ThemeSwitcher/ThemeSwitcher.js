// ThemeSwitcher.js
import React, { useState, useEffect } from 'react';
import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add(styles.dark);
    } else {
      document.body.classList.remove(styles.dark); 
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      if (newMode) {
        localStorage.setItem('theme', 'dark');
        document.body.classList.add(styles.dark);
      } else {
        localStorage.setItem('theme', 'light');
        document.body.classList.remove(styles.dark); 
      }
      return newMode;
    });
  };

  return (
    <div className={styles.themeSwitcher}>
      <button onClick={toggleTheme} className={styles.button}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
