function calculateAge(name, currentYear, birthYear) {
  let age = currentYear - birthYear;
  return `${name}, yowingiz ${age}`;
}

let userName = prompt("Ismingizni yozing:");
let currentYear = parseInt(prompt("Hozirgi yilni kiriting:"));
let birthYear = parseInt(prompt("Yilingizni kiriting"));

console.log(calculateAge(userName, currentYear, birthYear));

