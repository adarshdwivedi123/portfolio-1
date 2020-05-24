import React from 'react';
import Typed from 'react-typed';
import styles from './Home.module.css';

function Home({ homeRef }) {
  const strings = [
    'IIITian',
    'Full-Stack Developer',
    'Competitive Programmer',
    'ICPC Regionalist',
    'Rotaractor',
  ];
  return (
    <div className={styles.home} ref={homeRef}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.intro}>
          <p>I am </p>
          <p>Priyansh Gaharana</p>
        </div>
        {/* <div ref={el} elclassName={styles.title}>
          Competitive Programmer
        </div> */}
        <Typed className={styles.title} strings={strings} typeSpeed={100} loop backSpeed={70} />
      </div>
    </div>
  );
}

export default Home;
