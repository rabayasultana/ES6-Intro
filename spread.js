const max = Math.max(6, 23, 45, 1, 89, 23);
const numbers = [3, 5, 2, 45, 5, 43, 90, 32, 15];
// spread operator(...)
const arrayMax = Math.max(...numbers);

console.log(max);
console.log(arrayMax);

// use spread operator to copy
// const friends = [4, 5, 87, 9];
// const bondhu = friends;
// bondhu.push(12);
// console.log(bondhu);
// console.log(friends);
// bondhu and friends same memory location point korbe,tai 2 ta array same hobe,jetatei value push kora hok na keno.etake prevent korar jonno spread operator use kora hoy.

const friends = [4, 5, 87, 9];
const bondhu = friends;
const dosto = [...friends]; //copy
friends.push(12);
console.log(bondhu);
console.log(dosto);
console.log(friends);

// advanced
const sonkha = [...friends,9999] //add extra elements while copying
console.log(sonkha);
console.log(friends);
