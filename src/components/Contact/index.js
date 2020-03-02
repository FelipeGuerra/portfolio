import React from 'react';

import './styles.scss';

import Letter from '../../images/envelope-regular.svg';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="flex-column">
          <h2>Contact Me</h2>
          <div className="subtitle-line">
            <span><Letter/></span>
          </div>
          <div className="row">
            <div className="email">
              <h4><a href="mailto:felipemartinsguerra@gmail.com">felipemartinsguerra@gmail.com</a></h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;