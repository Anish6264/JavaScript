/*
1.  Write a "While" loop that calculates the sum of all numbers from 1 to 5 and stores it in a variable named "sum".
*/

let sum=0;
let i=1;

while(i<=5){
    sum=sum+i;
    i++
}
console.log(sum);


/*
2.  Write a "While" loop that counts down from 5 to 1 and stores the numbers in an array named "countdown".
*/

let countdown=[];
let j=5;
while(j>=1){
    countdown.push(j);
    j--;
}
console.log(countdown);
/*
3.  Write a "do while" loop that prompts a user to enter their favorite tea type until they enter"stop". store each tea type in an array named "teacolection".
*/

// let teacollection = [];
// let teatype;
// do {
//   // teatype = prompt(`enter your tea type( type "stop" to finish)`);

//   if (tea != "stop") {
//     teacollection.push(teatype);
//   }
// } while (teatype != "stop");
// coonsole.log(teacollection);
// this will not work in vs code bcz nodjs does not support prompt so we have to runn it in browser


/*
4.  Write a "do while" loop that adds number from 1 to 3 and stores the result in a variable named "total".
*/

let total = 0;
let k = 1;
do {
  total += k;
  k++;
} while (k <= 3);
console.log(total);

/*
5. Write a "for" loop that multiplies each element in the array "[2,4,6]" by 2 and stores the result in an array named "doubled".
*/

let array = [2, 4, 6];
let doubledarray = [];

for (let l = 0; l < array.length; l++) {
  number = array[l] * 2;
  doubledarray.push(number);
}
console.log(doubledarray);

/*
6. Write a "for" loop that lists all the cities in the array " ["landon", "paris", "tokyo", "newyork"]" and stores the result in an array named "citylist".
*/

let citylist = [];
let cities = [" landon ", "paris", "newyork", "tokyo"];
for (let c = 0; c < cities.length; c++) {
  let element = cities[c];
  citylist.push(element);
}
console.log(citylist);