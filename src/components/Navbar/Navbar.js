/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

function Navbar({ homeRef, aboutRef, skillsRef, projectsRef, profilesRef, contactRef }) {
  const [open, setOpen] = useState(false);
  const [top, setTop] = useState(true);
  const listenScrollEvent = () => {
    if (window.scrollY === 0) {
      setTop(true);
    } else setTop(false);
  };
  const onScroll = curRef => {
    // console.log(skillRef);
    window.scrollTo(0, curRef.current.offsetTop - 60);
    setOpen(false);
    // skillRef.current.scrollTop(50);
  };
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);
  return (
    <>
      <div className={open ? `${styles.open_navbar} ${styles.navbar} ` : top ? `${styles.top_navbar} ${styles.navbar}` : `${styles.navbar}`}>
        <nav className={styles.bar}>
          <div className={styles.wrapper}>
            <a
              className={top && !open ? `${styles.top_name} ${styles.name}` : `${styles.name}`}
              onClick={()=>{onScroll(homeRef)}}
            >
              mr_Priyansh
            </a>
            <div
              onClick={() => {
                setOpen(!open);
              }}
              className={
                open
                  ? `${styles.hamburger_button} ${styles.open_button}`
                  : top
                  ? `${styles.top_hamburger_button} ${styles.hamburger_button}`
                  : `${styles.hamburger_button}`
              }
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className={open ? `${styles.menu} ${styles.open_menu}` : top ? `${styles.top_menu} ${styles.menu}` : `${styles.menu}`}>
            <div className={styles.items}>
              <a
                onClick={() => {
                  onScroll(homeRef);
                }}
              >
                Home
              </a>
            </div>
            <div className={styles.items}>
              <a
                onClick={() => {
                  onScroll(aboutRef);
                }}
              >
                About
              </a>
            </div>
            <div className={styles.items}>
              <a
                onClick={() => {
                  onScroll(skillsRef);
                }}
              >
                Skills
              </a>
            </div>
            <div className={styles.items}>
              <a
                onClick={() => {
                  onScroll(projectsRef);
                }}
              >
                Projects & Certificates
              </a>
            </div>
            <div className={styles.items}>
              <a
                onClick={() => {
                  onScroll(profilesRef);
                }}
              >
                Profiles
              </a>
            </div>
            <div className={styles.items}>
              <a
                onClick={() => {
                  onScroll(contactRef);
                }}
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
