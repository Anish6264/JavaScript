/* 
1. declare an array named `teaflavours` that contains the strings `green tea`, `black tea` and `oolongtea`.
access the first element of the array and store it in a variable named `firsttea`.
*/

let teaflavours=["green tea", "black tea", "oolongtea"];
let firsttea=teaflavours[0];
// console.log(firsttea);

/* 
2. declare an array named `cities` that contains the strings `landon`, `tokyo` , `paris` and `newyork`.
access the third element of the array and store it in a variable named `favoritecity`.
*/

let cities=["landon","tokyo","paris","newyork"];
let favoritecity=cities[2];
// console.log(favoritecity);

/* 
3. you have  an array named `teatypes` that contains the strings `hearble tea`, `white tea` and `massala tea`.
change the second element of the array to jasmin tea.
*/

let teatypes=["hearble tea", "white tea", "massala tea"];
teatypes[1]="jasmin tea";
// console.log(teatypes);

/* 
4. declare an array named `citiesvisited` that contains the strings `mumbai`, and `sydeny`.
add berlin to the array using push method.
*/

let citiesvisited=["mumbai","sydeny"];
citiesvisited.push("berlin");
// citiesvisited[2]="berlin"; one of the method to add something to the array at any position
// citiesvisited[citiesvisited.length]="berlin"; one of the method to add something to the array at last position
// console.log(citiesvisited);


/* 
5. you have  an array named `teaorders` that contains the strings `chai`, `iced tea` ,`matcha` and `earl grey`.
remove the last element of an array using pop method and store it in a variable named `lastorder`.
*/

let teaorders=["chai", "iced tea", "matcha", "earl grey"];
let lastorder=teaorders.pop();
// console.log(lastorder);  pop also stores the removed element in a variable

/* 
6. you have an array named `popularteas` that contains the strings `green tea`, `oolong tea` and `chai`.
create a soft copy of array named softcoppyteas.
*/
// if we add or remove something from original array it will  affect the soft copy
let popularteas=["green tea","oolong tea","chai"];
let softcoppyteas=popularteas;
// console.log(softcoppyteas);

/* 
7. you have an array named `topcities` contaning "barlin","singapure",and "newyork".
create a hard copy of array named hardcoppycities.
*/

let topcities=["barlin","singapure","newyork"];
let hardcoppycities=[...topcities];
// let hardcoppycities2=topcities.slice();
// console.log(hardcoppycities);

/* 
8. you  have two  arrays: named `europiancities` contaning "paris",and "rome" and asiancities contaning "tokyo",and "bankkok".
merge these two arrays into a new array named `worldcities`.
*/

let europiancities=["paris","rome"];
let asiancities=["tokyo","bankkok"];
let worldcities=[...europiancities,...asiancities];
// let worldcities=europiancities.concat(asiancities);
// console.log(worldcities);

/* 
9. you have an array named `teamenu` that contains the strings `massala chai`, `green tea`, `oolong tea`, and `earl grey`.
find length of the array and store it in a variable named `menulength`.
*/

let teamenu=["massala chai", "green tea", "oolong tea", "earl grey"];
let menulength=teamenu.length;
// console.log(menulength);

/* 
10. you have an array named `citybucketlist` that contains the strings `kyoto`, `landon`, `cap town`, and `vancourver`.
check if `landon` is present in the array and store it in a variable named `islandon`.
*/

let citybucketlist=["kyoto", "landon", "cap town", "vancourver"];
// let islandon=citybucketlist.indexOf("landon"); is used to find the index of the element
// let islandon2=citybucketlist.includes("landon"); used to find if the element is present or not and returns true or false and it is case sensitive
console.log(islandon);



let myarr=[0,1,2,3,4,5]

// console.log(myarr);

// const arr= myarr.join()
// This print same as myarr but it is now converted to string
// console.log(typeof arr);

// console.log(myarr.slice(1,3))
// this will print the array from element number 1 to 3 and 3 is not included

//  myarr.slice(1,3) does not include 3rd element and the original is not changed 
//  myarr.splice(1,4) include 4th element and the array also changes it remove 4 element from array starting and then proint the original array 


// console.log(Array.of())
// .of and .from make string into array 


