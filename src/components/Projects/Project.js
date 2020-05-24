/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import styles from './Projects.module.css';
import facereco from '../../assets/images/facereco.png';
import { ReactComponent as GitSVG } from '../../assets/icons/git.svg';
import { ReactComponent as WebsiteSVG } from '../../assets/icons/website.svg';
import abviiitmalumniportal from '../../assets/images/abviiitmalumniportal.png';
import triggerAlert from '../getAlert/getAlert';
import qpgs from '../../assets/images/qpgs.png';
import imageModerator from '../../assets/images/imagemoderator.png';
import robofriends from '../../assets/images/robofriends.png';
import bgGenerator from '../../assets/images/bggenerator.png';
import seedbox from '../../assets/images/seedbox.png';
import icpc from '../../assets/images/icpcKanpur.png';
import linkedinapi from '../../assets/images/linkedin.png';
import snackdown from '../../assets/images/snackdown.jpeg';
import portfolio from '../../assets/images/portfolio.png';

function Projects({ projectsRef }) {
  const handleprivatewebsite = () => {
    triggerAlert({
      icon: 'info',
      title: ' Cannot share due to privacy concerns!',
      text: 'Will be live soon!',
    });
  };
  const handleprivategit = () => {
    triggerAlert({
      icon: 'info',
      title: ' Cannot share due to privacy concerns!',
      text: 'Will be public soon!',
    });
  };
  return (
    <div className={styles.projects} ref={projectsRef}>
      <div className={styles.container}>
        <div className={styles.header}> Projects & Certificates </div>
        <hr className={styles.line} />
        <div className={styles.content}>
          <div className={styles.card}>
            <div className={styles.links}>
              <div className={styles.icons}>
                <a
                  href="https://icpc.baylor.edu/ICPCID/FYH01BWSH4BG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WebsiteSVG width="1.5em" height="1.5em" />
                </a>
                {/* <a
                  href="https://github.com/anuj-singh14/image-moderator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitSVG width="1.5em" height="1.5em" />
                </a> */}
              </div>
            </div>
            <img className={styles.image} src={icpc} alt="project" />
            <p className={styles.project_title}>ICPC</p>
            <p className={styles.project_details}>
              The International Collegiate Programming Contest is an algorithmic programming contest
              for college students that occurs every year. It is a team contest. My team was
              qualified for regionals from two regions when we were sophomores.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.links}>
              <div className={styles.icons}>
                <a
                  role="button"
                  onClick={handleprivatewebsite}
                  tabIndex={0}
                  // href=""
                  // target="_blank"
                  // rel="noopener noreferrer"
                >
                  <WebsiteSVG width="1.5em" height="1.5em" />
                </a>
                <a
                  role="button"
                  tabIndex={0}
                  onClick={handleprivategit}
                  // href="https://github.com/mrpriyansh/facereco"
                  // target="_blank"
                  // rel="noopener noreferrer"
                >
                  <GitSVG width="1.5em" height="1.5em" />
                </a>
              </div>
              <p className={styles.info}> *Currently Working On</p>
            </div>
            <img className={styles.image} src={abviiitmalumniportal} alt="project" />
            <p className={styles.project_title}>ABV-IIITM Alumni Portal</p>
            <p className={styles.project_details}>
              It is a MERN Stack web application on which I am currently working. It will try to
              build an alumni network of my institute more efficiently.
            </p>
          </div>
          {/* <div className={styles.card}>
            <div className={styles.links}>
              <div className={styles.icons}>
                <a
                  href="https://www.codechef.com/certificates/public/94ddc7e"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WebsiteSVG width="1.5em" height="1.5em" />
                </a>
                {/* <a
                  href="https://github.com/anuj-singh14/image-moderator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitSVG width="1.5em" height="1.5em" />
                </a> 
              </div>
            </div>
            <img className={styles.image} src={snackdown} alt="project" />
            <p className={styles.project_title}>SnackDown'19- Certificate</p>
            <p className={styles.project_details}>
            SnackDown is a global programming event that invites teams from all over the world to take part in India’s most prestigious multi-round programming competition. Hosted by CodeChef, SnackDown is open to anyone with a knack for programming
            </p>
          </div> */}
          <div className={styles.card}>
            <div className={styles.links}>
              <div className={styles.icons}>
                <a
                  href="https://ap-image-moderator.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WebsiteSVG width="1.5em" height="1.5em" />
                </a>
                <a
                  href="https://github.com/anuj-singh14/image-moderator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitSVG width="1.5em" height="1.5em" />
                </a>
              </div>
            </div>
            <img className={styles.image} src={imageModerator} alt="project" />
            <p className={styles.project_title}>Image Moderator App</p>
            <p className={styles.project_details}>
              Image Moderator is a Web Service which returns probability scores on the likelihood
              image contains concepts such as explicit, suggestive, gore, drug, and safe. It is a
              fully nodejs web service that uses handlebars to build semantic templates in HTML.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.links}>
              <div className={styles.icons}>
                <a href="https://seed.gaharana.live" target="_blank" rel="noopener noreferrer">
                  <WebsiteSVG width="1.5em" height="1.5em" />
                </a>
                {/* <a
                  href="https://github.com/anuj-singh14/image-moderator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitSVG width="1.5em" height="1.5em" />
                </a> */}
              </div>
            </div>

            <img className={styles.image} src={seedbox} alt="project" />
            <p className={styles.project_title}>SeedBox</p>
            <p className={styles.project_details}>
              A seedbox is a high-bandwidth remote server for uploading and downloading of digital
              files from a P2P network. The web application is based on Node.js that uses Flood to
              communicates with rTorrent instances and serves a decent web UI for administration.
              The downloads are stored in my Google drive.
              <i> User Id, and the password are "demo" (without quotes).</i>
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.links}>
              <div className={styles.icons}>
                <a
                  href="https://facerecog786.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WebsiteSVG width="1.5em" height="1.5em" />
                </a>
                <a
                  href="https://github.com/mrpriyansh/facereco"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitSVG width="1.5em" height="1.5em" />
                </a>
              </div>
            </div>
            <img className={styles.image} src={facereco} alt="project" />
            <p className={styles.project_title}>Face Recognition App</p>
            <p className={styles.project_details}>
              Face Recognition is my first Full-Stack project whose server is based on Express and
              Node.js. The frontend is designed using Reactjs and Postgresql manages the database.
              It detects face from a publically accessible Image URL using Clarifai API.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.links}>
              <div className={styles.icons}>
                <a
                  href="http://linkedinapi.gaharana.live/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WebsiteSVG width="1.5em" height="1.5em" />
                </a>
                <a
                  href="https://github.com/mrpriyansh/linkedin_oauthv2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitSVG width="1.5em" height="1.5em" />
                </a>
              </div>
            </div>
            <img className={styles.image} src={linkedinapi} alt="project" />
            <p className={styles.project_title}>Linkedin Api Oauth v2</p>
            <p className={styles.project_details}>
              It is a simple Reactjs based web application that is integrated with Linkedin API to
              fetch user details. The web app is hosted on Google App Engine.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.links}>
              <div className={styles.icons}>
                <a
                  href="http://bggenerator.gaharana.live/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WebsiteSVG width="1.5em" height="1.5em" />
                </a>
                <a
                  href="https://github.com/mrpriyansh/bg_generator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitSVG width="1.5em" height="1.5em" />
                </a>
              </div>
            </div>
            <img className={styles.image} src={bgGenerator} alt="project" />
            <p className={styles.project_title}>Background Generator</p>
            <p className={styles.project_details}>
              Background Generator is a web app that changes the gradient of the background of the
              webpage by choosing two colors in real-time. It is a static website, and its files are
              served from Google Cloud Storage.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.links}>
              <div className={styles.icons}>
                <a
                  href="https://mrpriyansh.github.io/robofriends/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WebsiteSVG width="1.5em" height="1.5em" />
                </a>
                <a
                  href="https://github.com/mrpriyansh/robofriends"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitSVG width="1.5em" height="1.5em" />
                </a>
              </div>
            </div>
            <img className={styles.image} src={robofriends} alt="project" />
            <p className={styles.project_title}>Robofriends App</p>
            <p className={styles.project_details}>
              Robofriends is a fully React.js based web project that searches robots dynamically,
              and hosted using GitHub pages. Visit the website to play with different robots.
            </p>
          </div>
          {/* <div className={styles.card}>
            <div className={styles.links}>
              <div className={styles.icons}>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <WebsiteSVG width="1.5em" height="1.5em" />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <GitSVG width="1.5em" height="1.5em" />
                </a>
              </div>
              <p className={styles.info}> *Currently Working</p>
            </div>
            <img className={styles.image} src={qpgs} alt="project" />
            <p className={styles.project_title}>Question Paper Generating System</p>
            <p className={styles.project_details}>
              The QUESTION PAPER GENERATING SYSTEM (In short, QPGS) will enable college authorities to automatically generate question papers out of existing question bank in the database. Reactjs design its layout, and the backend is working on Nodejs and Express. It is hosted on Heroku.
            </p>
          </div> */}
          <div className={styles.card}>
            <div className={styles.links}>
              <div className={styles.icons}>
                <a
                  href="https://mrpriyansh.github.io/portfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WebsiteSVG width="1.5em" height="1.5em" />
                </a>
                <a
                  href="https://github.com/mrpriyansh/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitSVG width="1.5em" height="1.5em" />
                </a>
              </div>
            </div>
            <img className={styles.image} src={portfolio} alt="project" />
            <p className={styles.project_title}>Portfolio</p>
            <p className={styles.project_details}>
              A web site built using React.Js showcasing my skills and projects, hosted on Github Pages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
