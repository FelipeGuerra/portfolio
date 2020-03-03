import React, { Component } from 'react';

import './styles.scss';

import Code from '../../images/code-solid.svg';
import Check from '../../images/check-circle-solid.svg';


class SkillList extends React.Component {
  render() {
    const skillData = require('../../services/skills.json');
    return (
      Object.keys(skillData).map(function(key) {
        return (
          <div className="skills-col" key={key}>
            <section>
              <h3>{key}</h3>
              <ul className="item-skills">
                {skillData[key].map(function(value, key) {
                  return (
                    <li key={key}>{value}</li>
                  );
                })}
              </ul>
            </section>
          </div>
        );
      })
    );
  }
}

export default class Skills extends Component {
  /* state = {
    skills: []
  }

  async componentDidMount() {
    this.loadSkills();
  }

  loadSkills = () => {    
    const skillData = require('../../services/skills.json');
    this.setState({skills: skillData})
  } */

  render() {
    // const {skills} = this.state;
    const skillData = require('../../services/skills.json');
    return (      
      <section id="skills">
        {/* {console.log(skillData)} */}

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
            <SkillList />                   
          </div>
        </div>
      </section>
    )
  }
}