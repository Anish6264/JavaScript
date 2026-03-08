// const raj= new map
// Map.set="anish"


//  in case of for each we can also also use .filter( ()=> {
    // return "your condition"})
    // this also work as for each without using if condition


    const mynumbers=[1,2,3,4,5,6,7,8,9,10]

//    const newnums= mynumbers.map((num) => num+10)
//    console.log(newnums)

//    const newnums=mynumbers.filter((num) => {
//     return num>4
// } )
//    console.log(newnums);
   
// const newnames=[];
// mynumbers.forEach((num) => {
//     return newnames.push(num+10)
// })
// console.log(newnames);


// const newnums= mynumbers
//                         .map((num) => num*10)
//                         .map((num) => num+1)
//                         .filter((num) => num>40)
//         console.log(newnums);
        


const myself=[1,2,3]

const total=myself.reduce((acc,currval)=>{
    console.log(`acc value is ${acc}`);
    
    return acc+currval
},0)
console.log(total);
