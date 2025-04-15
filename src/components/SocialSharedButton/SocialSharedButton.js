'use client';

import styles from './SocialSharedButton.module.css';
import React, { useEffect, useState } from 'react';
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter, FaRegCopy } from "react-icons/fa6";

const SocialShareButtons = () => {
  const [currentUrl, setCurrentUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    } catch (err) {
      console.error('Не вдалося скопіювати посилання:', err);
    }
  };

  return (
    <div className={styles.wrapperShare}>
      <h4 className={styles.title}>Share:</h4>
      <div className={styles.wrapperBtn}>
        <button className={styles.btn}
          onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank')}
        >
          <FaFacebook />
        </button>
        <button className={styles.btn}
          onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`, '_blank')}
        >
          <FaXTwitter />
        </button>
        <button className={styles.btn}
          onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(currentUrl)}`, '_blank')}
        >
          <FaWhatsapp />
        </button>
        <button className={styles.btn} onClick={copyToClipboard}>
        <FaRegCopy />
        </button>
      </div>
      {copied && <p className={styles.copiedText}>Copied!</p>}
    </div>
  );
};

export default SocialShareButtons;
