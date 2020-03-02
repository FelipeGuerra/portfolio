import React from 'react';

import './styles.scss';

import Code from '../../images/code-solid.svg';
import profile from '../../images/profile.png';

const Intro = () => {
  return (
    <section id="intro">
      <div className="container">
        <div className="flex-column">
          <img className="img-me" src={profile} alt="Felipe Guerra"/>
          <h1>I'm Felipe Guerra</h1>
          <div className="subtitle-line">
            <span><Code /></span>
          </div>
          <h2>Front-end Developer and e-commerce specialyst</h2>
        </div>
      </div>
    </section>
  )
}

export default Intro;