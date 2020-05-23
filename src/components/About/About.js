import React from 'react';
import photo from '../../assets/images/testimonial-2.jpg';
import styles from './About.module.css';
import { ReactComponent as CallSVG } from '../../assets/icons/call.svg';
import { ReactComponent as EmailSVG } from '../../assets/icons/email.svg';

function About({ aboutRef }) {
  return (
    <div className={styles.about} ref={aboutRef}>
      <div className={styles.container}>
        <div className={styles.info}>
          <img src={photo} className={styles.photo} alt="me" />
          <div className={styles.details}>
            <div>
              <p className={styles.title}>Name:</p>
              <p className={styles.field}> Priyansh Gaharana</p>
            </div>
            <div>
              <p className={styles.title}>Email:</p>
              <p className={styles.field}>
                {' '}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=gaharana98@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <EmailSVG width="1em" height="1em" style={{ marginRight: '4px' }} />
                  gaharana98@gmail.com
                </a>
              </p>
            </div>
            <div>
              <p className={styles.title}>Phone:</p>
              <p className={styles.field}>
                {' '}
                <a href="tel:+91 9452685369">
                  <CallSVG width="1em" height="1em" />
                  +91-9452685369
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.about_me}>
          <p className={styles.heading}>About Me</p>
          <p className={styles.about_me_details}>
            I am Priyansh, studying in IIIT Gwalior. A Competetive Programmer and trying my hands on
            Web Development stuff. Ready for future opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
