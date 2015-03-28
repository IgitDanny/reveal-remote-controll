'use strict';

const React = require('react/addons');

require('styles/Timer.styl');

class Timer extends React.Component {
  constructor(props) {
    super(props);

    let now = Date.now();

    this.state = {
      start: now,
      slideStart: now
    };

    this.tick = this.tick.bind(this);
    this.getFormattedDate = this.getFormattedDate.bind(this);
    this.changeSlide = this.changeSlide.bind(this);

    setInterval(this.tick , 1000);
  }

  getFormattedDate(milliseconds) {
    let seconds = milliseconds / 1000 % 60
      , minutes = (milliseconds / (1000*60)) % 60;

    minutes = Math.floor(minutes);
    seconds = Math.floor(seconds);

    return (minutes < 10 ? '0' + minutes : minutes) + ' : ' + (seconds < 10 ? '0' + seconds : seconds);
  }

  tick() {
    let now = Date.now();

    this.setState({
      presentationTime: this.getFormattedDate(now - this.state.start),
      slideTime: this.getFormattedDate(now - this.state.slideStart)
    });
  }

  changeSlide() {
    this.setState({
      slideStart: Date.now()
    });
  }

  render() {
    return (
      <div>
        <p>Presentatino time: {this.state.presentationTime}</p>
        <p>Slide time: {this.state.slideTime}</p>

        <button className="pure-button pure-button-primary" onClick={this.changeSlide}>Change slide!</button>
      </div>
    );
  }
}

module.exports = Timer;
