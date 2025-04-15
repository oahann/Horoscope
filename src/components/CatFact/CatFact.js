import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './CatFact.module.css'

const CatFact = () => {
  const [catFact, setCatFact] = useState(null);

  useEffect(() => {
    const fetchCatFact = async () => {
      try {
        const response = await axios.get('https://catfact.ninja/fact');
        setCatFact(response.data.fact);
      } catch (err) {
        console.error('Error fetching cat fact:', err);
      }
    };

    fetchCatFact();
  }, []);

  return (
    <div>
      <h4 className={styles.title}>Fact about cats</h4>
      <p className={styles.text}>{catFact}</p>
    </div>
  );
};

export default CatFact;
