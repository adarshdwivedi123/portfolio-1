import React from 'react';
import styles from './Skills.module.css';
import { ReactComponent as AfterEffectSVG } from '../../assets/icons/afterEffect.svg';
import { ReactComponent as CSVG } from '../../assets/icons/c.svg';
import { ReactComponent as CppSVG } from '../../assets/icons/c++.svg';
import { ReactComponent as CSSSVG } from '../../assets/icons/css3.svg';
import { ReactComponent as DockerSVG } from '../../assets/icons/docker.svg';
import { ReactComponent as GitSVG } from '../../assets/icons/git.svg';
import { ReactComponent as HerokuSVG } from '../../assets/icons/heroku.svg';
import { ReactComponent as HTMLSVG } from '../../assets/icons/html5.svg';
import { ReactComponent as JSSVG } from '../../assets/icons/js.svg';
import { ReactComponent as MongodbSVG } from '../../assets/icons/mongodb.svg';
import { ReactComponent as NPMSVG } from '../../assets/icons/npm.svg';
import { ReactComponent as PhotoshopSVG } from '../../assets/icons/photoshop.svg';
import { ReactComponent as PostgresqlSVG } from '../../assets/icons/postgresql.svg';
import { ReactComponent as PremiereProSVG } from '../../assets/icons/premiere_pro.svg';
import { ReactComponent as PythonSVG } from '../../assets/icons/python.svg';
import { ReactComponent as ExpressSVG } from '../../assets/icons/expressjs.svg';
import { ReactComponent as GCESVG } from '../../assets/icons/gce.svg';
import { ReactComponent as GCSSVG } from '../../assets/icons/gcs.svg';
import { ReactComponent as LinuxSVG } from '../../assets/icons/linux.svg';
import { ReactComponent as NodejsSVG } from '../../assets/icons/nodejs.svg';
import { ReactComponent as ReactjsSVG } from '../../assets/icons/reactjs.svg';
import { ReactComponent as VimSVG } from '../../assets/icons/vim.svg';

function Skills({ skillsRef }) {
  return (
    <div className={styles.skills} ref={skillsRef}>
      <div className={styles.container}>
        <div className={styles.header}>Skills </div>
        <hr className={styles.line} />
        <div className={styles.content}>
          <div className={styles.ring}>
            <ReactjsSVG width="3em" height="3em" />
          </div>
          <div className={styles.ring}>
            <JSSVG width="3em" height="3em" />
          </div>
          <div className={styles.ring}>
            <NodejsSVG width="3em" height="3em" />
          </div>
          <div className={styles.ring}>
            <ExpressSVG width="3em" height="3em" />
          </div>
          <div className={styles.ring}>
            <MongodbSVG width="3em" height="3em" />
          </div>
          <div className={styles.ring}>
            <HTMLSVG width="3em" height="3em" />
          </div>
          <div className={styles.ring}>
            <CSSSVG width="3em" height="3em" />
          </div>
          <div className={styles.ring}>
            <PostgresqlSVG width="3em" height="3em" />
          </div>
          <div className={styles.ring}>
            <CppSVG width="3em" height="3em" />
          </div>
          <div className={styles.ring}>
            <CSVG width="3em" height="3em" />
          </div>
          <div className={styles.ring}>
            <VimSVG width="3em" height="3em" />
          </div>
          <div className={styles.ring}>
            <LinuxSVG width="3em" height="3em" />
          </div>
          <div className={styles.ring}>
            <GitSVG width="3em" height="3em" />
          </div>
          <div className={styles.ring}>
            <HerokuSVG width="3em" height="3em" />
          </div>
          <div className={styles.ring}>
            <DockerSVG width="3em" height="3em" />
          </div>
          {/* <div className={styles.ring}>
            <NPMSVG width="3em" height="3em" />
          </div> */}
          <div className={styles.ring}>
            <PhotoshopSVG width="3em" height="3em" />
          </div>
          <div className={styles.ring}>
            <AfterEffectSVG width="3em" height="3em" />
          </div>
          <div className={styles.ring}>
            <PremiereProSVG width="3em" height="3em" />
          </div>
          <div className={styles.ring}>
            <PythonSVG width="3em" height="3em" />
          </div>
          {/* <div className={styles.ring}>
            <HTMLSVG width="3em" height="3em" />
          </div> */}
          <div className={styles.ring}>
            <GCESVG width="3em" height="3em" />
          </div>
          <div className={styles.ring}>
            <GCSSVG width="3em" height="3em" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
