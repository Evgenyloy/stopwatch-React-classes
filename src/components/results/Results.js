import timeFormater from '../../utils/timeFormater'

function Resolts({ lapTime }) {
  return (
    <ul className="results">
      {lapTime
        .map(({ m, s, ms }, index) => {
          const minute = timeFormater(m)
          const second = timeFormater(s)
          const millisecond = timeFormater(ms)

          return (
            <li className="resolts-item" key={index}>
              <span className="order">{`# ${index + 1}`}</span>
              <span className="resolts-number">
                {minute} : {second} : {millisecond}
              </span>
            </li>
          )
        })
        .reverse()}
    </ul>
  )
}

export default Resolts
