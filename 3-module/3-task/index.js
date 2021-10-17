function camelize(str) {
  let wordsOfArr = str.split('-');
  let capWords = wordsOfArr.map(function(word, index) {
    if (index !== 0) {
     return word[0].toUpperCase() + word.slice(1);
    } else {
      return word;
    }
  });
  return str = capWords.join('');
}
