'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './HoroscopeCalendar.module.css';
import HoroscopeButtons from '@/components/HoroscopeButton/HoroscopeButton';
import { generateScores } from '@/utils/generateScores';
import CatFact from '@/components/CatFact/CatFact';
import SocialShareButtons from '@/components/SocialSharedButton/SocialSharedButton';
import { FaStar, FaArrowDown } from "react-icons/fa";

const HoroscopeComponent = ({ selectedSign }) => {
  const [horoscope, setHoroscope] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [period, setPeriod] = useState('TODAY');
  const [scores, setScores] = useState(null);

  useEffect(() => {
    const fetchHoroscope = async () => {
      if (!selectedSign || !period) return;
      setLoading(true);
      setError(null);
      setHoroscope(null);
      setScores(null);

      try {
        const response = await axios.get('/api/horoscope', {
          params: {
            sign: selectedSign.value,
            day: period,
          },
        });

        const data = response.data.data;
        setHoroscope(data);

        let dateForScores = '';

        if (Array.isArray(data)) {
          dateForScores = data[0]?.date || new Date().toISOString().slice(0, 10);
        } else {
          dateForScores = data.date || `${new Date().toISOString().slice(0, 10)}-${period}`;
        }

        if (dateForScores) {
          const generated = generateScores(selectedSign.value, dateForScores);
          setScores(generated);
        }
      } catch (err) {
        console.error('Error fetching horoscope:', err);
        setError('Не вдалося завантажити гороскоп');
      } finally {
        setLoading(false);
      }
    };

    fetchHoroscope();
  }, [selectedSign, period]);

  const calculateAverageScore = () => {
    if (!scores) return 0;
    const total = scores.health + scores.relationships + scores.career;
    return total / 3;
  };

  const averageScore = calculateAverageScore();

  const maxScore = Math.max(scores?.health || 0, scores?.relationships || 0, scores?.career || 0);
  const minScore = Math.min(scores?.health || 0, scores?.relationships || 0, scores?.career || 0);

  const getScoreIcon = (value) => {
    if (value === maxScore) return <FaStar className={styles.iconBest} title="Найкращий показник" />;
    if (value === minScore) return <FaArrowDown className={styles.iconWorst} title="Найгірший показник" />;
    return null;
  };

  return (
    <div>
      <div className={styles.containerHoroscopeCalendar}>
        <HoroscopeButtons selectedPeriod={period} onSelect={setPeriod} />

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {!loading && horoscope && (
          <div>
            <div className={styles.titleDatanSign}>
              <h3>{selectedSign.label}</h3>
              <h3 className={styles.date}>{horoscope.date}</h3>
            </div>
            <p className={styles.textHoroscope}>
              <strong className={styles.titleGeneral}>General:</strong> {horoscope.horoscope_data}
            </p>
          </div>
        )}

        {!loading && scores && (
          <div>
            <div className={styles.scoreRow}>
              <p className={styles.titleScore}>
                <span>Health: {scores.health} / 10</span>
                {getScoreIcon(scores.health)}
              </p>
              <progress value={scores.health} max="10" className={styles.scores}></progress>
            </div>
            <div className={styles.scoreRow}>
              <p className={styles.titleScore}>
                <span>Relationships: {scores.relationships} / 10</span>
                {getScoreIcon(scores.relationships)}
              </p>
              <progress value={scores.relationships} max="10" className={styles.scores}></progress>
            </div>
            <div className={styles.scoreRow}>
              <p className={styles.titleScore}>
                <span>Career: {scores.career} / 10</span>
                {getScoreIcon(scores.career)}
              </p>
              <progress value={scores.career} max="10" className={styles.scores}></progress>
            </div>
          </div>
        )}

        {!loading && (
          averageScore > 5 
            ? <CatFact />
            : <p className={styles.lowScoreMessage}>You don't have enough zodiac score to get a fact about cats</p>
        )}
      </div>

      <SocialShareButtons />
    </div>
  );
};

export default HoroscopeComponent;
