import React from 'react';
import styles from './Profiles.module.css';
import { ReactComponent as GitSVG } from '../../assets/icons/git.svg';
import { ReactComponent as CodechefSVG } from '../../assets/icons/codechef.svg';
import { ReactComponent as HESVG } from '../../assets/icons/HE_logo.svg';
import { ReactComponent as HRSVG } from '../../assets/icons/hackerrank.svg';
import { ReactComponent as LinkedinSVG } from '../../assets/icons/linkedin.svg';
import codeforces from '../../assets/icons/codeforces.png';

function Profiles({ profilesRef }) {
  return (
    <div className={styles.profiles} ref={profilesRef}>
      <div className={styles.container}>
        <div className={styles.header}>Profiles</div>
        <hr className={styles.line} />
        <div className={styles.content}>
          <a href="https://github.com/mrpriyansh" target="_blank" rel="noopener noreferrer">
            <div className={styles.ring}>
              <GitSVG width="6em" height="6em" />
            </div>
          </a>
          <a
            href="https://hackerearth.com/users/mr_priyansh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.ring}>
              <HESVG width="5em" height="5em" fill="#323754" />
            </div>
          </a>
          <a
            href="https://codeforces.com/profile/mr_priyansh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.ring}>
              <img className={styles.image} src={codeforces} alt="hackerearth" />
            </div>
          </a>
          <a
            href="https://codechef.com/users/mr_priyansh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.ring}>
              <CodechefSVG width="6em" height="6em" />
            </div>
          </a>
          <a href="https://hackerrank.com/mr_priyansh" target="_blank" rel="noopener noreferrer">
            <div className={styles.ring}>
              <HRSVG width="6em" height="6em" fill="#25b258" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/priyansh-gaharana-4454a1148/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.ring}>
              <LinkedinSVG width="5em" height="5em" fill="#000" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profiles;
