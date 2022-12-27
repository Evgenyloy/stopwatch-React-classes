function Clear({ lapTime, onClearArr }) {
  const clear =
    lapTime.length > 0 ? (
      <div className="clear" onClick={onClearArr}>
        <div className="clear-text">Clear All</div>
      </div>
    ) : (
      ''
    )

  return clear
}

export default Clear
