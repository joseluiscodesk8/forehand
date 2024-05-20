'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/index.module.scss';

const Logo: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <div className={styles.logoContainer}>
        <Image src={"https://deportesregol.com/wp-content/uploads/2020/02/128003_Ultimate_Discraf_Prof_175G_.jpg"} className={`${styles.logo} ${isLoading ? styles.loading : styles.loaded}`} width={200} height={200} alt='logo' />
        <h1 className={`${styles.title} ${isLoading ? styles.loading : styles.loaded}`}>ForeHand</h1>
      </div>
    );
  };
  
  export default Logo;