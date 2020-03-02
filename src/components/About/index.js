import React from 'react';

import './styles.scss';

import Card from '../../images/id-card-regular.svg';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="flex-column">
          <h2>About</h2>
          <div className="subtitle-line">
            <span><Card /></span>
          </div>
          <div className="row">
            <div className="about--description">
              <p>Graduated in Multimedia and MBA in PMI, work as a front-end developer since 2009.
              During this time I worked in digital agencies of São Paulo and Portugal, which gave me a great technologies and a solid technical knowledge.
              Passionate about web development, always trying to keep me as current as possible in all technologies and development methods.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;