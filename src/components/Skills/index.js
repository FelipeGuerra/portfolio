import React from 'react';

import './styles.scss';

import Code from '../../images/code-solid.svg';
import Check from '../../images/check-circle-solid.svg';

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="flex-column">
          <h2>Skills</h2>
          <div className="subtitle-line">
            <span><Code/></span>
          </div>
          <p className="text-large">
            Knowledge acquired and evolving every day!
          </p>
        </div>

        <div className="flex-row">
          <div className="skills-col">
            <section>
              <h3>Front-end</h3>
              <ul className="item-skills">
                <li>HTML<Check /></li>
                <li>CSS<Check /></li>
                <li>Javascript<Check /></li>
                <li>ReactJS<Check /></li>
                <li>jQuery<Check /></li>
                <li>Bootstrap<Check /></li>
                <li>Sass<Check /></li>
                <li>Webpack<Check /></li>
                <li>Gulp<Check /></li>
                <li>Responsive layout<Check /></li>
                <li>Cross-Browser<Check /></li>
              </ul>
            </section>
          </div>

          <div className="skills-col">
            <section>
              <h3>Platforms/CMS</h3>
              <ul className="item-skills">
                <li>Vtex Cloud<Check /></li>
                <li>Presta Shop<Check /></li>
                <li>EZ Commerce<Check /></li>
                <li>B-Seller<Check /></li>
                <li>Tray<Check /></li>
                <li>Wordpress<Check /></li>
              </ul>
            </section>
          </div>

          <div className="skills-col">
            <section>
              <h3>Back-end</h3>
              <ul className="item-skills">
                <li>Python<Check /></li>
                <li>PHP<Check /></li>          
                <li>MongoDB<Check /></li>
                <li>MySQL<Check /></li>
                <li>SQLServer<Check /></li>
                <li>SQLite<Check /></li>
              </ul>
            </section>
          </div>

          <div className="skills-col">
            <section>
              <h3>Version Control</h3>
              <ul className="item-skills">
                <li>GIT<Check /></li>
                <li>SVN<Check /></li>
              </ul>
            </section>
          </div>                    
        </div>
      </div>
    </section>
  )
}

export default Skills;