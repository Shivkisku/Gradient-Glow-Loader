import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={`${styles.loader_cube} ${styles.loader_cube_glowing}`}></div>
      <div className={`${styles.loader_cube} ${styles.loader_cube_color}`}></div>
    </div>
  );
};

export default Loader;
