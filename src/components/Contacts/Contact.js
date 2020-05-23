/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import styles from './Contact.module.css';
import resume from '../../assets/images/resume.png';
import { ReactComponent as GmailSVG } from '../../assets/icons/gmail.svg';
import { ReactComponent as WhatsappSVG } from '../../assets/icons/whatsapp.svg';
import { ReactComponent as CallSVG } from '../../assets/icons/call.svg';

function Contact({ contactRef }) {
  return (
    <div className={styles.contact} ref={contactRef}>
      <div className={styles.container}>
        {/* <div className={styles.resume}>
          <p className={styles.header}>Resume</p>
          <hr className={styles.line} />
          <a href="assets/resume.pdf" target="_blank">
            <img src={resume} className={styles.resume_img} alt="resume" />
          </a>
        </div> */}
        <div className={styles.contact_container}>
          <p className={styles.header}>Contact</p>
          <hr className={styles.line} />
          <div className={styles.content}>
            <a href="tel:+919452685369">
              <div className={styles.ring}>
                <CallSVG width="3em" height="3em" />
              </div>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=gaharana98@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.ring}>
                <GmailSVG width="3em" height="3em" />
              </div>
            </a>
            <a href="https://wa.me/+919452685369/">
              <div className={styles.ring}>
                <WhatsappSVG width="3em" height="3em" />
              </div>
            </a>
            {/* <p className={styles.text}>
              {' '}
              I hope you like my portfolio and my work. I am currently looking for an Internship. I
              believe my relevant skills would be a good fit for an internship, and I hope you
              contact me soon. For my part, I will put all of me, my dedication, and my best.
            </p>
            <div className={styles.icons}>
              <a href="tel:+919452685369">
                <CallSVG width="1.5em" height="1.5em" fill="#0078ff" />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gaharana98@gmail.com">
                <GmailSVG width="1.5em" height="1.5em" />
              </a>
              <a href="https://wa.me/+919452685369/">
                {' '}
                <WhatsappSVG width="1.5em" height="1.5em" />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
