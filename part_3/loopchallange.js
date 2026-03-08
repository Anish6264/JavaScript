/*1. Write a "for" loop that loops through the array ["green tea", "black tea", "chai" "oolong tea"] and stops the loop when it finds chai and stores all the teas before chai in an array named "selectedteas".
*/

let tea = ["green tea", "black tea", "chai", "oolong tea"];
let selectedtea = [];
for (let i = 0; i < tea.length; i++) {

    //  selectedtea.push(tea[i]);  if we use this here then it will add chai also
  if (tea[i] === "chai") {
    break;
  }
  selectedtea.push(tea[i]);
}
//console.log(selectedtea);



/* 2. Write a "for" loop that loops through the array ["landon", "paris", "tokyo", "newyork"]" and skips "paris".
store the other cities in a new array named "visitedcities".
*/

// let array = ["landon", "new york", "paris", "berlin"];
// let visitedcities = [];
// for (let j = 0; j < array.length; j++) {
//   if (array[j] !== "paris") {
//     visitedcities.push(array[j]);
//   }
// }
// console.log(visitedcities);

    //  or //


// let array = ["landon", "new york", "paris", "berlin"];
// let visitedcities = [];
// for (let j = 0; j < array.length; j++) {
//   if (array[j] === "paris") {
//     continue;
//   }
//   visitedcities.push(array[j]);
// }
//  console.log(visitedcities);

/*
3.use a "for-of" loop to iterate through the array[1,2,3,4,5] and stop when the number 4 is found store the number before 4 in the array named smallernumbers.
*/

let num = [1, 2, 3, 4, 5];
let smallnum = [];
for (const number of num) {
  if (number === 4) {
    break;
  }
  smallnum.push(number);
}
//console.log(smallnum);

/*
4.Write a "for-of" loop that loops through the array ["green tea", "black tea", "chai","herbal tea", "oolong tea"] and skip the chai and store the other teas in an array named "selectedteas".
*/

 let teas = ["chai", "green tea", "herbal tea", "black tea", "oolong tea"];
 let preferedtea = [];
 for (const te of teas) {
   if (te == "herbal tea") {
     continue;
   }
   preferedtea.push(te);
 }
 //console.log(preferedtea);

 /*
 5. use a for-in loop to loop through an object contaning city population.
 stop the loop when the population of "berlin" is found and store previous citioes population in a new object named "citypopulation".
 */


 let citiespopulation={
  "landon": 100000,
  "paris": 200000,
  "tokyo": 300000,
  "newyork": 400000,
  "berlin": 500000,
 }

  let citypopulation = {};
  // console.log(Object.keys(citiespopulation)); //way to print keys of object
  // console.log(Object.values(citiespopulation));//way to print values of object

  for (const city in citiespopulation) {
    if (city == "berlin") {
      break;
    }
                // key=value //
     citypopulation[city] = citiespopulation[city];
     console.log(citiespopulation[city]);// way to print object in a loop by using varible
  }
  console.log(citypopulation);

 /*
 6. use a for-in loop to loop through an object contaning city population.
 skip any city with population below 300000 and store the other cities population in a new object named "citypopulation".
 */
  let citiespopulations={
  "landon": 100000,
  "paris": 200000,
  "tokyo": 300000,
  "newyork": 400000,
  "berlin": 500000,
 }
  let citypopulations = {};
  //  console.log(Object.keys(citiespopulation));
  //   console.log(Object.values(citiespopulation));

  for (const city in citiespopulations) { // here city is key so for value we have to use citiespopulations[city]

    if (citiespopulations[city] < 200000) {
      continue;
    }
    citypopulations[city] = citiespopulations[city];
    //   console.log(citiespopulation[city]);
  }
 // console.log(citypopulations);

  /*
  7. use a for each loop that itrates through the array ["earl gray", "green tea", "chai", "oolong tea", "matcha"]
  and stops the loop when chai is found  and store the previous tea names in an array named "teas2".
  */

  let allteas=["earl gray", "green tea", "chai", "oolong tea", "matcha"];
  let teas2 = [];
    allteas.forEach(function (tea) {
      if (tea === "chai") {
        
      }
      teas2.push(tea);
    });
   // console.log(teas2);

    /*
    8. use a for each loop that itrates through the array ["earl gray", "green tea", "chai", "oolong tea", "matcha"]
  and skip chai  and store the  tea names in an array named "teas3".
  */

    let alltea = ["earl gray", "green tea", "chai", "oolong tea", "matcha"];
    let teas3 = [];

    alltea.forEach(function (tea) {
      if (tea === "chai") {
        return;
      }
      teas3.push(tea);
    });
   // console.log(teas3);
 

    /*
    9. write a for loop that itrates through an array[2,5,7,9].
    skip the 7 and multiply the rest of element of array and store it in a array named double
    */

    let array = [2, 5, 7, 9];
    let double = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] == 7) {
        continue;
      }
      double.push(array[i] * 2);
    }
    //console.log(double);

    /*
    10. use a for of loop to iterates through the array ["green tea", "black tea", "chai", "jasmin tea","oolong tea", "herbal tea"]
    and stop when the length of the current tea name is greater than 10
    and store the teas iterated over in an array named short teas
    */

    
   let tey = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
   let short = [];
   for (const tr of tey) {
     if (tr.length > 10) {
       break;
     }
     short.push(tr);
   }
   // console.log(short);

  



  // " FOR in" loop print only key values and "for of" loop print values and "for of "is not workable for object and "for in" is not workable for map