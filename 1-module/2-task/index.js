/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  if (name === null) {
    return false;
  } else if (name.length >= 4 &&
      name.indexOf(' ', 0) === -1) {
        return true;
      } else if (name.length <= 4 ||
                 name.indexOf(' ', 0) !== -1) {
                   return false;
                 }
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}

sayHello();