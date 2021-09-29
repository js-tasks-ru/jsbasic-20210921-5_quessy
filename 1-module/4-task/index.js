function checkSpam(str) {
  str = str.toLowerCase();

  if (str.indexOf('1xbet', 0) !== -1) {
    return true;
  } else if (str.indexOf('xxx', 0) !== -1) {
    return true;
  } else {
    return false;
  }
}