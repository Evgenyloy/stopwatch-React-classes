function timeFormater(arg) {
  const num = arg <= 9 ? '0' + arg : arg
  return num
}

export default timeFormater
