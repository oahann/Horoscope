'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const ZodiacSelect = dynamic(() => import('@/components/ZodiacSelect/ZodiacSelect'), { ssr: false });
import HoroscopeComponent from '@/components/HoroscopeCalendar/HoroscopeCalendar';
import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher';
import { zodiacOptions } from '@/components/data/zodiacOptions';
import styles from './Main.module.css';

export default function Main() {
  const [selectedZodiac, setSelectedZodiac] = useState(zodiacOptions[0]);

  const handleZodiacChange = (selectedOption) => {
    setSelectedZodiac(selectedOption);
  };
  
  return (
    <main className={styles.container}>
      <ThemeSwitcher />
      <div className={styles.zodiacHeaderFlexBox}>
        <div className={styles.header}>
          <div className={styles.zodiacSection}>
            <div className={styles.zodiacIcon}>{selectedZodiac.icon}</div>
          </div>
        </div>
        <div className={styles.selectZodiacnTitle}>
          <h1 className={styles.title}>Select your zodiac sign</h1>
          <ZodiacSelect 
            value={selectedZodiac} 
            onChange={handleZodiacChange} 
          /> 
        </div>
      </div>
      <HoroscopeComponent 
        selectedSign={selectedZodiac} 
        setSelectedSign={setSelectedZodiac}
      />
    </main>
  );
}