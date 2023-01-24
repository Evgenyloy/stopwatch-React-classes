import { Component } from 'react';

import './App.css';
import Display from '../display/Display';
import Resolts from '../results/Results';
import Clear from '../clear/Clear';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: { ms: 0, s: 0, m: 0 },
      lapTime: [],
      interv: '',
      status: 0,
    };
  }
  // status 0 - off
  // status 1 - started
  // status 2 - paused

  startTimer = () => {
    let updateMs = this.state.time.ms,
      updateS = this.state.time.s,
      updateM = this.state.time.m;

    if (updateM > 59) {
      updateM = 0;
    }
    if (updateS > 59) {
      updateM++;
      updateS = 0;
    }
    if (updateMs === 99) {
      updateMs = 0;
      updateS++;
    }
    updateMs++;

    this.setState(() => ({
      time: { ms: updateMs, s: updateS, m: updateM },
    }));
  };

  onStart = () => {
    this.startTimer();
    this.setState({
      interv: setInterval(this.startTimer, 10),
      status: 1,
    });
  };

  onStop = () => {
    this.setState({
      status: 0,
      time: { ms: 0, s: 0, m: 0 },
      interv: clearInterval(this.state.interv),
      lapTime: [],
    });
  };

  onPause = () => {
    this.setState({ interv: clearInterval(this.state.interv), status: 2 });
  };

  onLap = () => {
    if (this.state.status === 0) return;

    let lapTimeCopy = [...this.state.lapTime];
    lapTimeCopy.push(this.state.time);
    this.setState({ lapTime: lapTimeCopy });
  };

  onClearArr = () => {
    this.setState({ lapTime: [] });
  };

  render() {
    const { time, status, lapTime } = this.state;
    return (
      <div className="App">
        <Display
          time={time}
          onStart={this.onStart}
          onStop={this.onStop}
          status={status}
          onPause={this.onPause}
          onLap={this.onLap}
        />
        <Resolts lapTime={lapTime} />
        <Clear lapTime={lapTime} onClearArr={this.onClearArr} />
      </div>
    );
  }
}

export default App;
