function checkSpam(str) {
  str = str.toLowerCase();

  if (str.includes('1xbet') === true || str.includes('xxx') ) {
    return true;
  }
    return false;
}