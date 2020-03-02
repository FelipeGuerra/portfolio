import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

import './styles.scss';

import Code from '../../images/code-solid.svg';
import MenuBars from '../../images/bars-solid.svg';

const useStyles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    }
  },
});

class Header extends Component {
  
  componentDidMount() {
    this.navAnchors();
  }

  navAnchors = () => {
    const navButton = document.querySelectorAll('#main-header .MuiButtonGroup-root button');
    
    for (let i = 0; i < navButton.length; i++) {
      const button = navButton[i];
      button.onclick = function() {
        const anchor = this.getAttribute("value");
        const posTop = document.getElementById(anchor).offsetTop;
        scrollTo(document.documentElement, posTop, 1250);
      }
    }

    function scrollTo(element, to, duration) {
      var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

      var animateScroll = function () {
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if (currentTime < duration) {
          setTimeout(animateScroll, increment);
        }
      };
      animateScroll();
    }

    //t = current time
    //b = start value
    //c = change in value
    //d = duration
    Math.easeInOutQuad = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };
  }

  render () {
    const { classes } = this.props;
    return (
      <header id="main-header">
        <div className="container">
          <div className="flex-row">
            <a className="logo" href="#main-header">
              <Code /> Felipe Guerra
            </a>
  
            <button className="navbar-toggler mobile-only">
              <MenuBars />
            </button>
  
            <div className={classes.root}>
              <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                <Button value="about">About</Button>
                <Button value="skills">Skills</Button>
                <Button value="contact">Contact</Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default withStyles(useStyles)(Header)