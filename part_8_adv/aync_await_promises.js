function fetchdata(){
    return new Promise((reject,resolve)=>{
      setTimeout  (()=>{
         resolve({name:"anish",url:"https://google.com"})
      },3000)
    })
}


async function getuserdata(){
    try{
          console.log("fatching data.....")
         const userdata= await fetchdata()
         console.log("user data:",userdata)
    } catch(error){
       console.log("error fetching data",error)
    }
}
getuserdata()

// promise is an object so you can not consume promis like promise()
// we can use .then,.catch or async and await 