function fetchdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {  // not necessary to use setTimeout

      let success = true;
      if (success) {
        resolve("Data fatched successluly");
      } else {
        reject("error fatching data");
      }
    }, 3000);
})
}

fetchdata()
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
  .finally(()=> console.log("promise is worked ")) // weather promise resolve or reject finally always work

  // youtube

  const promiseone= new Promise(function(resolve,reject){
    setTimeout(() => {
      console.log("async task is complete");
      resolve()
    }, 1000);
  })

  promiseone.then(function(){
    console.log("promis consumed");
    
  })
  // .then is directly is connected to resolve by writing "resolve()" we connect then

