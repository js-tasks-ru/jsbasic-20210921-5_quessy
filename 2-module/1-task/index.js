function sumSalary(salaries) {
let sum = 0;

for (let prop in salaries) {
if (typeof salaries[prop] === 'number' &&
    isNaN( salaries[prop] ) !== true &&
    typeof salaries[prop] !== Infinity &&
    typeof salaries[prop] !== -Infinity) {
      sum += salaries[prop];
    } else if (isNaN( salaries[prop] ) === true) {
      return sum;
    } else if (salaries[prop] === 0) {
      return 0;
    }

  }
  return sum;
}
