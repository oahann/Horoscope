import React from 'react';
import styles from './HoroscopeButton.module.css';

const options = [
  { label: 'Today', value: 'TODAY' },
  { label: 'Tomorrow', value: 'TOMORROW' },
  { label: 'Week', value: 'WEEK' },
  { label: 'Month', value: 'MONTH' },
];

const HoroscopeButtons = ({ selectedPeriod, onSelect }) => {
  return (
    <div className={styles.container}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onSelect(option.value)}
          className={`${styles.button} ${selectedPeriod === option.value ? styles.buttonActive : ''}`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default HoroscopeButtons;
