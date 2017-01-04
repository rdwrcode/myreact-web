import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    const date = new Date();

    this.state = {
      seconds: date.getSeconds(),
      minutes: date.getMinutes(),
      hour: date.getHours()
    };
  }

  updateTime({ seconds, minutes, hour }) {
    seconds += 1;
    if (seconds === 60) {
      seconds = 0;
      minutes += 1;
    }
    if (minutes === 60) {
      minutes = 0;
      hour += 1;
    }
    if (hour === 12) {
      hour = 0;
    }
    return { seconds, minutes, hour };
  }

  tick() {
    this.setState(this.updateTime(this.state));
    //console.log('s:', this.state.seconds);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const secondsDegrees = ((this.state.seconds / 60) * 360) + 90;
    const minsDegrees = ((this.state.minutes / 60) * 360) + 90;
    const hourDegrees = ((this.state.hour / 12) * 360) + 90;

    const s = `rotate(${secondsDegrees}deg)`;
    const m = `rotate(${minsDegrees}deg)`;
    const h = `rotate(${hourDegrees}deg)`;

    const css_second = {
      transform: s 
    }

    const css_minute = {
      transform: m 
    }

    const css_hour = {
      transform: h 
    }

    return (
      <div className="Clock-app">
        <div className="Clock-body">
          <div className="Clock-clock">
            <div className="Clock-face">
              <div ref="hour"
                style={css_hour} 
                className="Clock-hand hour-hand"></div>
              <div ref="minute"
                style={css_minute} 
                className="Clock-hand min-hand"></div>
              <div ref="second"
                style={css_second} 
                className="Clock-hand second-hand"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;