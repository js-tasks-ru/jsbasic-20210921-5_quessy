function ucFirst(str) {
if (str === '') {
  return '';
} else if (str.length > 0) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
}
