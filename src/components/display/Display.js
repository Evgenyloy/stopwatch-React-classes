import timeFormater from '../../utils/timeFormater';
import PropTypes from 'prop-types';

function Display({ time, onStart, onStop, status, onPause, onLap }) {
  const { ms, s, m } = time;
  const minute = timeFormater(m);
  const second = timeFormater(s);
  const millisecond = timeFormater(ms);

  const btnText = status === 0 || status === 2 ? 'start' : 'pause';
  const btnColor = status !== 1 ? 'button start ' : 'button pause ';

  let clazz =
    status === 1 || status === 2 ? 'outer-cicle animation-bg' : 'outer-cicle';
  let animationCicle = {
    animationPlayState: status === 1 ? 'running' : 'paused',
  };

  return (
    <div className="timer">
      <div className={clazz} style={animationCicle}>
        <div className="inner-cicle ">
          <div className="time minute">{minute}</div>
          <span> : </span>
          <div className="time second">{second}</div>
          <span> : </span>
          <div className="time millisecond">{millisecond}</div>
        </div>
      </div>
      <div className="buttons">
        <div className={btnColor} onClick={status === 1 ? onPause : onStart}>
          {btnText}
        </div>
        <div className="button lap" onClick={onLap}>
          lap
        </div>
        <div className="button stop" onClick={onStop}>
          Stop
        </div>
      </div>
    </div>
  );
}

Display.propTypes = {
  time: PropTypes.object,
  status: PropTypes.number,
  onStart: PropTypes.func,
  onStop: PropTypes.func,
  onPause: PropTypes.func,
  onLap: PropTypes.func,
};

export default Display;
