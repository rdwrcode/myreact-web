import React, { Component } from 'react';
import './Clocks.css';

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

class Clocks extends Component {
  constructor(props) {
    super(props);
    const date = new Date();

    this.state = {
      seconds: date.getSeconds(),
      minutes: date.getMinutes(),
      hour: date.getHours(),
      date: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      day: date.getDay()
    };

    this.dialLines = [];
    this.today = ``;
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
  }

  addDialLines() {
    // calculate each dial lines
    for (let i = 1; i < 60; i++) {
      const css_dial = {
        transform: `rotate(${6*i}deg)`
      }
      this.dialLines.push(<div style={css_dial} className='Clocks-diallines' key={i}></div>);
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
    this.addDialLines();
    // calculate today
    this.today = `${this.state.month}/${this.state.date}/${this.state.year}`;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    // starting position is 12 Clock
    const secondsDegrees = ((this.state.seconds / 60) * 360);
    const minsDegrees = ((this.state.minutes / 60) * 360);
    const hourDegrees = ((this.state.hour / 12) * 360);

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

    const time = `${this.state.hour}:${this.state.minutes}:${this.state.seconds}`

    return (
      <div className="Clocks-app">
        <div ref="Clock" className="Clocks-clock">
          {this.dialLines}
          <div className="Clocks-date">{this.today}</div>
          <div className="Clocks-day">{weekday[this.state.day]}</div>
          <div className="Clocks-dot"></div>
          <div style={css_hour} className="Clocks-hour-hand"></div>
          <div style={css_minute} className="Clocks-minute-hand"></div>
          <div style={css_second} className="Clocks-second-hand"></div>
          <div>
            <span className="Clocks-h3">3</span>
            <span className="Clocks-h6">6</span>
            <span className="Clocks-h9">9</span>
            <span className="Clocks-h12">12</span>
          </div>
          <div ref="DialLines" className="Clocks-diallines"></div>
          <div className="Clocks-time">{time}</div>
        </div>
      </div>
    );
  }
}

export default Clocks;