'use strict';
// task1
// let user = { name: 'john', year: 30 };
// let { name, year: age, isAdmin = false } = user;
// alert(name);
// alert(age);
// alert(isAdmin);
// task2
let salaries = {
  'john': 100,
  'pete': 300,
  'mary': 250
};

function topSalaries () {
  let max = 0;
  let top;

  for (let [key, value] of Object.entries(salaries)) {
    if (value >= max) {
      top = key;
      max = value;
    }
  }
  return top;
}
console.log(topSalaries(salaries));
